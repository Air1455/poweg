import React from 'react';
import {Button, Toolbar} from "@mui/material";
import Logo from "./Logo";
import AppBar from "@mui/material/AppBar";
import {useSelector} from "react-redux";
import {Link} from "react-scroll";

const MyAppBar = () => {
    const displayAppBar= useSelector(state => state.base).appBarIsDisplay

    return (
        <AppBar id="app-bar" className={displayAppBar ? "show":""}>
            <Toolbar className="bar">
                <Logo animate={true} />
                <Link className={"bar__link"} to="p__presentation" smooth={true} offset={-120} duration={1000} containerId={"root"}>
                    Présentation
                </Link>
                <Link className={"bar__link"} to="p__website" smooth={true} offset={-120} duration={1100} containerId={"root"}>
                    Site internet
                </Link>
                <Link className={"bar__link"} to="p__merchant-site" smooth={true} offset={-120} duration={1300} containerId={"root"}>
                    Site marchand
                </Link>
                <Link className={"bar__link"} to="p__website-app" smooth={true} offset={-120} duration={1500} containerId={"root"}>
                    Application Web
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
