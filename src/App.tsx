import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import { Home } from "./pages/Home";
import { People } from "./pages/People";
import { NotFound } from "./components/NotFound";


const defaultTheme = createTheme();

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <NotFound />,
        },
        {
            path: '/card/:cardId',
            element: <People />
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