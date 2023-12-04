import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {Button, Toolbar} from "@mui/material";
import Logo from "../components/Logo";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayAppBar} from "../redux/baseReducer";
import MyAppBar from "../components/MyAppBar";

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
            <MyAppBar />

            {!displayAppBar && <div id="logo-container" className={logoContainerClassName}>
                <div className={"logo__block"}>
                    <div>Bienvenue chez</div>
                    <Logo animate={true} />
                </div>
            </div>}
            {children}
        </div>
    );
};

export default Base;