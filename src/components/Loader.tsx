import { Box, CircularProgress } from "@mui/material";
import React from "react";

import "../assets/scss/components/Loader.scss";

const Loader = () => (
    <Box className="loader-container">
        <CircularProgress size={400} thickness={3} value={100} className="loader" />
    </Box>
);

export default Loader;
