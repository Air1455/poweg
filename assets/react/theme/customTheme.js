import {createTheme} from "@mui/material/styles";

export const customTheme = createTheme({
    palette: {
        primary: {
            light: '#9cb1f1',
            main: '#597de7',
            dark: '#1f4dd5',
            contrastText: '#fff',
        },
        secondary: {
            light: '#aca9a9',
            main: '#868282',
            dark: '#5f5c5c',
            contrastText: '#000',
        },
        tertiary: {
            light: '#ff8181',
            main: '#ff3434',
            dark: '#e70000',
            contrastText: '#000',
        },
        dark: {
            light: '#9e9e9e',
            main: '#424242',
            dark: '#212121',
            contrastText: '#000',
        },
        black: {
            light: '#5e5e5e',
            main: '#151515',
            dark: '#000000',
            contrastText: '#000',
        },
        excel: {
            light: '#1D6F42',
            main: '#1D6F42',
            dark: '#1D6F42',
            contrastText: '#000',
        },
    },
});