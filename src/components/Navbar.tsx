import { ChangeEvent, useState } from "react";
import { Box, Button, Input, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearKeywords, setKeywords as setKeywordsAction } from "../redux/actions/article";
import useScroll from "../helpers/hooks/useScroll";

import searchGlass from "../assets/img/search.svg";
import cross from "../assets/img/cross.svg";

import "../assets/scss/components/Navbar.scss";

const Navbar = () => {
    const [keywords, setKeywords] = useState("");
    const [animateIcon, setAnimateIcon] = useState(false);
    const { isScrolled } = useScroll();
    const dispatch = useDispatch();

    const turnAnimationOn = () => setAnimateIcon(true);

    const turnAnimationOff = () => setAnimateIcon(false);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replaceAll('"', "");
        setKeywords(value);
        dispatch(setKeywordsAction(value.split(" ")));
    };

    const onClear = () => {
        dispatch(clearKeywords());
        setKeywords("");
    };

    return (
        <header className={`search-bar${isScrolled ? " scrolled" : ""}`}>
            <InputLabel className="label">
                <span className="search-bar-label">Filter by keywords</span>
                <Box className="search-bar-container" onMouseEnter={turnAnimationOn} onMouseLeave={turnAnimationOff}>
                    <img src={searchGlass} alt="" className={`search-bar-icon${animateIcon ? " animate" : ""}`} width={20} height={20} />
                    <Input type="text" className="search-bar-input" onChange={onInputChange} value={keywords} />
                    {!!keywords.length && (
                        <Button onClick={onClear} aria-label="Clear input">
                            <img src={cross} alt="" width={20} height={20} />
                        </Button>
                    )}
                </Box>
            </InputLabel>
        </header>
    );
};

export default Navbar;
