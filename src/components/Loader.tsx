import React from "react";
import { Box, CircularProgress } from "@mui/material";

import "../assets/scss/components/Loader.scss";

const Loader = () => (
    <Box className="loader-container">
        <CircularProgress size={300} thickness={3} value={100} className="loader" />
    </Box>
);

export default Loader;
