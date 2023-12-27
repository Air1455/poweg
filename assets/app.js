import React, {useEffect, useState} from "react"
import './styles/app.scss';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FontFaceObserver from "fontfaceobserver";
import Home from "./react/pages/Home";
import Base from "./react/base/Base";
import {Provider} from "react-redux";
import {store} from "./react/redux/store";
import {ThemeProvider} from "@mui/material";
import {customTheme} from "./react/theme/customTheme";

function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                const logoFont = new FontFaceObserver('Logo Police');
                const defaultFontRegular = new FontFaceObserver('Default Police', { weight: 'normal' });
                const defaultFontBold = new FontFaceObserver('Default Police', { weight: 'bold' });

                await Promise.all([logoFont.load(), defaultFontRegular.load(),defaultFontBold.load()]);
                setFontsLoaded(true);
            } catch (e) {
                console.error("Erreur lors du chargement des polices", e);
                setFontsLoaded(true);
            }
        };

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return <div></div>; // Ou tout autre indicateur de chargement
    }
    return <ThemeProvider theme={customTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <Base>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);