import { Grid, Input, InputLabel } from "@mui/material";

import "../assets/scss/components/Navbar/Navbar.scss";

const Navbar = () => {
    // const { isTouchDevice } = useTouchDevice();
    // const { width } = useWindowDimensions();

    return (
        <header className="nav">
            <InputLabel className="lavel">
                <Input type="text" />
            </InputLabel>
        </header>
    );
};

export default Navbar;
