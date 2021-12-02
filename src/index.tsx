import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import ErrorBoundary from "./components/ErrorBoundary";

import App from "./App";
import "./assets/scss/index.scss";
import Loader from "./components/Loader";

const THEME = createTheme({
    typography: {
        fontFamily: `"Montserrat", sans-serif`,
        fontSize: 16
    }
});

render(
    <BrowserRouter>
        <Suspense fallback={<Loader />}>
            <ThemeProvider theme={THEME}>
                {/*<Provider store={store}>*/}
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
                {/*</Provider>*/}
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);
