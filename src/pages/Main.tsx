import React, { useEffect, useState } from "react";
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, Divider, Grid, Link, Typography } from "@mui/material";
import moment from "moment";
import Head from "../components/Head";
import fetchFromApi from "../helpers/fetchFromApi";
import { ArticleType } from "../helpers/types/ArticleType";

import calendar from "../assets/img/calendar.svg";
import arrowRight from "../assets/img/arrow-right.svg";
import "../assets/scss/pages/Main/Main.scss";
import Loader from "../components/Loader";

const Main = () => {
    const [articles, setArticles] = useState([]);
    const [articlesCount, setArticlesCount] = useState([]);

    useEffect(() => {
        getArticles();
        getArticlesCount();
    }, []);

    const getArticles = async () => {
        try {
            const response = await fetchFromApi("articles?_limit=12");
            if (response.ok) {
                setArticles(await response.json());
            } else {
                // EO
            }
        } catch (e) {
            console.error(e);
        }
    };

    const getArticlesCount = async () => {
        try {
            const response = await fetchFromApi("articles/count");
            if (response.ok) {
                setArticlesCount(await response.json());
            } else {
                // EO
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Box sx={{ width: 1290, display: "flex", flexDirection: "column", flexWrap: "nowrap" }} className="main-page">
            <Head title="" description="" />
            {!!articles.length && (
                <>
                    <Typography variant="h4" className="results">
                        Results: {articlesCount}
                    </Typography>
                    <Divider className="ruler" />
                    <Grid container alignItems={"stretch"} sx={{ maxWidth: 1200 }} spacing="45px" className="articles-list">
                        {articles.map((val: ArticleType) => (
                            <Grid item xs={12} md={6} lg={4} className="card-container">
                                <Card className="card">
                                    <div className="content">
                                        <CardMedia component="img" height="220" image={val.imageUrl} alt={val.title} />
                                        <div className="text-content">
                                            <Typography className="card-date">
                                                <img src={calendar} alt="" className="icon" />
                                                {moment(val.publishedAt).format("MMM Do, YYYY")}
                                            </Typography>
                                            <CardContent className="card-content">
                                                <Typography variant="h5" component="div" className="card-header">
                                                    {val.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {val.summary}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                    <CardActions className="card-actions">
                                        <Link href={`article/${val.id}`} underline="hover" className="card-link">
                                            Read more <img src={arrowRight} alt="" />
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
            {!articles.length && <Loader />}
        </Box>
    );
};

export default Main;
