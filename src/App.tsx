import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {People} from "./pages/People";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {usePeopleStore} from "./store/store";


const defaultTheme = createTheme();

export default function App() {
    const activePeople = usePeopleStore(state => state.activePeople)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/card/:cardId',
            element: Object.keys(activePeople).length !== 0 && <People />,
        }
    ])

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        SWAPI
                    </Typography>
                </Toolbar>
            </AppBar>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}