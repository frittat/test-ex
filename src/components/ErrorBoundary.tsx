import React, { Component, ErrorInfo } from "react";
import { Box, Link, Typography } from "@mui/material";
import Head from "./Head";
import constants from "../helpers/constants";

import notFound from "../assets/img/notFound.svg";

import "../assets/scss/pages/Error.scss";

interface ErrorBoundaryProps {
    [key: string]: any;
}

class ErrorBoundary extends Component {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(JSON.stringify(error), JSON.stringify(errorInfo));
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            return (
                <Box className="error-page">
                    <Head title={constants.unexpectedError.text} description={constants.unexpectedError.text} />
                    <Typography variant="h1" className="error-header">
                        {constants.unexpectedError.header}
                    </Typography>
                    <img src={notFound} alt={constants.unexpectedError.text} width="100%" height="400" className="error-img" />
                    <Box className="error-link-container">
                        <Link href="/" underline="none" className="error-link">
                            To the homepage
                        </Link>
                    </Box>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
