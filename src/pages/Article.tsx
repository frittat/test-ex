import React, { useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoremIpsum } from "lorem-ipsum";
import Head from "../components/Head";
import { setError } from "../redux/actions";
import { ArticleType } from "../helpers/types/article.type";
import fetchFromApi from "../helpers/fetchFromApi";
import constants from "../helpers/constants";

import arrowRight from "../assets/img/arrow-right.svg";

import "../assets/scss/pages/Article.scss";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 20,
        min: 10
    },
    wordsPerSentence: {
        max: 16,
        min: 8
    }
});

const Article = () => {
    const [activeArticle, setActiveArticle] = useState<ArticleType>({
        events: [],
        featured: false,
        id: 0,
        imageUrl: "",
        launches: [],
        newsSite: "",
        publishedAt: "",
        summary: "",
        title: "",
        updatedAt: "",
        url: ""
    });
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (Object.keys(searchParams) && searchParams.get("id")) {
            // @ts-ignore
            const idFromPathname = +searchParams.get("id");
            getArticleById(idFromPathname);
        } else {
            throw Error("Ooops... You are on the wrong page!");
        }
    }, [location]);

    const getArticleById = async (id: number) => {
        try {
            const response = await fetchFromApi(`articles/${id}`);
            if (response.ok) {
                return setActiveArticle(await response.json());
            } else {
                dispatch(setError(constants.apiError.header, constants.apiError.text));
                return null;
            }
        } catch (e) {
            console.error(e);
            dispatch(setError(constants.unexpectedError.header, constants.unexpectedError.text));
        }
    };

    return (
        <Box className="article-page">
            <Head
                title={activeArticle.title}
                description={activeArticle.summary}
                cardTitle={activeArticle.title}
                cardDescription={activeArticle.summary}
                imgType="PNG"
                imgUrlSecure={activeArticle.imageUrl}
                imgUrl={activeArticle.imageUrl}
                imgAlt={activeArticle.title}
            />
            <img src={activeArticle.imageUrl} alt={activeArticle.title} width="100%" height={245} />
            <Box className="article-container">
                <Typography variant="h2" className="article-title">
                    {activeArticle.title}
                </Typography>
                <Typography variant="body2" className="article-paragraph">
                    {activeArticle.summary}
                </Typography>
                {[...Array(4)].map(() => (
                    <Typography variant="body2" className="article-paragraph">
                        {lorem.generateParagraphs(1)}
                    </Typography>
                ))}
            </Box>
            <Box className="return-link-container">
                <Link href="/" underline="hover" className="return-link">
                    <img src={arrowRight} alt="" width="12" height="10" className="arrow-reverse" /> Back to homepage
                </Link>
            </Box>
        </Box>
    );
};

export default Article;
