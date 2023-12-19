import React from "react";
import { Typography, Container, Grid, Card, CardContent, CardActions, Button} from "@mui/material"
import { CardSkeleton } from "../ui/skeletons";
import { LoadingButton } from "@mui/lab";
import { usePeopleStore } from "../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IPeople } from "../interfaces";

export const Home = () => {
    const getPeople = usePeopleStore(state => state.fetchPeople)
    const people = usePeopleStore(state => state.people)
    const isPeopleLoading = usePeopleStore(state => state.isPeopleLoading)
    const setActivePeople = usePeopleStore(state => state.setActivePeople)
    const navigate = useNavigate()
    const openCard = (item: IPeople, index: number) => {
        setActivePeople(item)
        navigate(`/card/${index + 1}`)
    }

    useEffect(() => {
        if(!people.length) {
            getPeople()
        }
    }, [])
    return (
        <>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {people.length ?
                            people.map((card, index) => (
                                <Grid item key={card.name} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2" sx={{textAlign: 'center'}}>
                                                {card.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button sx={{mx: 'auto', display: 'block'}} size="medium" onClick={() => openCard(card, index)}>Открыть</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )) : Array.from(Array(10).keys()).map(el => (
                                <Grid item key={el} xs={12} sm={6} md={4}>
                                    <CardSkeleton />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <LoadingButton loading={isPeopleLoading} sx={{ mt: 4, mx: 'auto', display: 'flex' }} variant="contained" onClick={getPeople}>
                        <span>Показать еще</span>
                    </LoadingButton>
                </Container>
            </main>
        </>
    )
}