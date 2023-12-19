import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
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
            <Button sx={{mt: '20px'}} onClick={() => navigate('/')} variant="contained">Домой</Button>
        </Box>
    );
}