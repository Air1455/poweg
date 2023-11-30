import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {Button, Toolbar} from "@mui/material";
import Logo from "../components/Logo";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayAppBar} from "../redux/baseReducer";

const Base = ({children}) => {
    const [logoContainerClassName, setLogoContainerClassName] = useState('')
    const displayAppBar= useSelector(state => state.base).appBarIsDisplay
    const dispatch= useDispatch()

    useEffect(() => {
        setTimeout(()=> setLogoContainerClassName('logo-top'),3000)
        setTimeout(()=> dispatch(setDisplayAppBar(true)),4000)
    }, []);

    return (
        <div>
            <AppBar id="app-bar" className={displayAppBar ? "show":""}>
                <Toolbar>
                    <Logo animate={true} />
                    <Button variant="outlined">Lien</Button>
                </Toolbar>
            </AppBar>

            {!displayAppBar && <div id="logo-container" className={logoContainerClassName}>
                <div>Bienvenue chez</div>
                <Logo animate={true} />
            </div>}
            {children}
        </div>
    );
};

export default Base;