import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Head from "../components/Head";
import constants from "../helpers/constants";

import notFound from "../assets/img/notFound.svg";

import "../assets/scss/pages/Error.scss";

const NotFound = () => {
    return (
        <Box className="error-page">
            <Head title={constants.pageNotFound.header} description={constants.pageNotFound.text} />
            <Typography variant="h1" className="error-header">
                {constants.pageNotFound.header}
            </Typography>
            <img src={notFound} alt={constants.pageNotFound.text} width="100%" height="400" className="error-img" />
            <Box className="error-link-container">
                <Link href="/" underline="none" className="error-link">
                    To the homepage
                </Link>
            </Box>
        </Box>
    );
};

export default NotFound;
