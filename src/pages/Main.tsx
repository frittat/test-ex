import React, { useEffect, useState } from "react";
import { Box, Card, CardActions, CardContent, CardMedia, Divider, Grid, Link, Pagination, Typography } from "@mui/material";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Head from "../components/Head";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { RootState } from "../redux/rootState.interface";
import { setError } from "../redux/actions";
import { ArticleType } from "../helpers/types/article.type";
import fetchFromApi from "../helpers/fetchFromApi";
import constants from "../helpers/constants";

import calendar from "../assets/img/calendar.svg";
import arrowRight from "../assets/img/arrow-right.svg";

import "../assets/scss/pages/Main.scss";

const ARTICLES_PER_PAGE = 12;

const Main = () => {
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [articlesCount, setArticlesCount] = useState(0);
    const { keywords } = useSelector((state: RootState) => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        getArticles(`articles?_limit=${ARTICLES_PER_PAGE}&_start=${(page - 1) * ARTICLES_PER_PAGE}`);
        getArticlesCount();
    }, []);

    useEffect(() => {
        let query = `articles?_limit=${ARTICLES_PER_PAGE}&_start=${(page - 1) * ARTICLES_PER_PAGE}`;
        // ****** not working, described in the comment ******
        // if (keywords.length && keywords.every((val) => !!val)) {
        //     let inQuery = "";
        //     keywords.map((val, index) => (index === 0 ? (inQuery += `${val}`) : (inQuery += `&${val}`)));
        //     query += `&q=${JSON.stringify(inQuery)}`;
        // }
        getArticles(query);
    }, [page /*, keywords*/]);

    const getArticles = async (query: string) => {
        try {
            const response = await fetchFromApi(query);
            if (response.ok) {
                return setArticles(await response.json());
            } else {
                dispatch(setError(constants.apiError.header, constants.apiError.text));
                return null;
            }
        } catch (e) {
            console.error(e);
            dispatch(setError(constants.unexpectedError.header, constants.unexpectedError.text));
        }
    };

    const getArticlesCount = async () => {
        try {
            const response = await fetchFromApi("articles/count");
            if (response.ok) {
                return setArticlesCount(await response.json());
            } else {
                dispatch(setError(constants.apiError.header, constants.apiError.text));
                return null;
            }
        } catch (e) {
            console.error(e);
            dispatch(setError(constants.unexpectedError.header, constants.unexpectedError.text));
        }
    };

    const onPageChange = (event: any, value: number) => {
        setPage(value);
    };

    return (
        <>
            <Navbar />
            <Box className="main-page">
                <Head title="" description="" />
                {!!articles.length && (
                    <>
                        <Box className="ruler-container">
                            <Typography variant="h4" className="results">
                                Results: {articlesCount}
                            </Typography>
                            <Divider className="ruler" />
                        </Box>
                        <Grid container alignItems="stretch" spacing="45px" className="articles-list">
                            {articles.map((val: ArticleType) => (
                                <Grid item xs={12} md={6} lg={4} className="card-container" key={val.id}>
                                    <Link href={`article?id=${val.id}`} underline="none" className="card-wrapper">
                                        <Card className="card">
                                            <div className="content">
                                                <CardMedia component="img" height="220" width="100%" image={val.imageUrl} alt={val.title} />
                                                <div className="text-content">
                                                    <Typography className="card-date">
                                                        <img src={calendar} alt="" width="16" height="16" className="icon" />
                                                        {moment(val.publishedAt).format("MMM Do, YYYY")}
                                                    </Typography>
                                                    <CardContent className="card-content">
                                                        <Typography variant="h5" component="div" className="card-header">
                                                            {val.title}
                                                        </Typography>
                                                        <Highlighter highlightClassName="highlight" searchWords={keywords} autoEscape={true} textToHighlight={`${val.summary.substring(0, 100)}...`} />
                                                    </CardContent>
                                                </div>
                                            </div>
                                            <CardActions className="card-actions">
                                                <Typography variant="body2" className="card-link">
                                                    Read more <img src={arrowRight} alt="" width="12" height="10" className="arrow" />
                                                </Typography>
                                            </CardActions>
                                        </Card>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
                {!articles.length && <Loader />}
                <Pagination
                    count={Math.ceil(articlesCount / ARTICLES_PER_PAGE) || 1}
                    showFirstButton
                    showLastButton
                    variant="outlined"
                    shape="rounded"
                    onChange={onPageChange}
                    className="pagination"
                />
            </Box>
        </>
    );
};

export default Main;
