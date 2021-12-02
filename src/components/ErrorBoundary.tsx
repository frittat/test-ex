import { Component, ErrorInfo } from "react";
import { Box, Link } from "@mui/material";
import Head from "./Head";

// import "../../assets/scss/pages/Error.scss";

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
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", flexWrap: "nowrap" }}>
                    <Head title="Error" description="Ooops... Something unexpected has happen!" />
                    <h1 className="error-header">Ooops... Something unexpected has happen!</h1>
                    <Link href="/" underline="hover" className="error-btn">
                        To the homepage
                    </Link>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
