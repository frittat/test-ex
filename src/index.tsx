import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorModal from "./components/ErrorModal";
import Loader from "./components/Loader";
import { store } from "./redux/store";

import "./assets/scss/index.scss";

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
                <Provider store={store}>
                    <ErrorBoundary>
                        <App />
                        <ErrorModal />
                    </ErrorBoundary>
                </Provider>
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);
