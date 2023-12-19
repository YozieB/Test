import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                mt: '200px'
            }}
        >
            <Typography variant="h1">
                404
            </Typography>
            <Typography variant="h6">
                Страница не существует, или данный обьект не найден в базе данных
            </Typography>
            <Link to="/">
                <Button sx={{mt: '20px'}} variant="contained">Домой</Button>
            </Link>
        </Box>
    );
}