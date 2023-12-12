import React from "react"
import './styles/app.scss';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./react/pages/Home";
import Base from "./react/base/Base";
import {Provider} from "react-redux";
import {store} from "./react/redux/store";
import {ThemeProvider} from "@mui/material";
import {customTheme} from "./react/theme/customTheme";

function App() {
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