import React from "react"
import {usePeopleStore} from "../store/store";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export const People = () => {
    const activePeople = usePeopleStore(state => state.activePeople)
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" sx={{textAlign: 'center'}}>
                    name: {activePeople.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" sx={{textAlign: 'center'}}>
                    height: {activePeople.height}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" sx={{textAlign: 'center'}}>
                    birth: {activePeople.birth_year}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" sx={{textAlign: 'center'}}>
                    eyes: {activePeople.eye_color}
                </Typography>
            </CardContent>
        </Box>
    )
}