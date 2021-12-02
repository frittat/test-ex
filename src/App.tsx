import React from "react";
import { withRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import Navbar from "./components/Navbar";

import "./assets/scss/App.scss";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes />
        </>
    );
};

export default withRouter(App);
