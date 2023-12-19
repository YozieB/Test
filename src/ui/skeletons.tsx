import React from "react";
import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";

export const CardSkeleton = () => {
    return (
        <Box sx={{ height: '100%', minHeight: '120px', display: 'flex', flexDirection: 'column' }}>
            <Skeleton height={75} />
            <Skeleton sx={{mx: 'auto'}} width="40%" height={55} />
        </Box>
    );
}