import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardContent, Typography, Box } from "@mui/material";
import { PeopleSkeleton } from "../ui/skeletons";
import { NotFound } from "../components/NotFound";
import { usePeopleStore } from "../store/store";

export const People = () => {
    const activePeople = usePeopleStore(state => state.activePeople)
    const fetchActivePeople = usePeopleStore(state => state.fetchActivePeople)
    const { cardId } = useParams();

    useEffect(() => {
        if (Object.keys(activePeople).length === 0) {
            fetchActivePeople(Number(cardId))
        }
    }, [])
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', pt: '100px' }}>
            {Object.keys(activePeople).length === 0 ? <PeopleSkeleton /> : activePeople.detail !== 'Not found' ? <CardContent sx={{ flexGrow: 1 }}>
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
            </CardContent> : <NotFound />}
        </Box>
    )
}