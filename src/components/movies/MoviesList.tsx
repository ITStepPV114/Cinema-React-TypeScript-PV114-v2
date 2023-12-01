import { useState } from "react";
import MovieCard from "./MovieCard";
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { IMovie, IMovieDTO } from "../../types/movie";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { getTokenFromLocalStorage } from "../../helpers/localStorage.helper";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MovieService } from "../../services/movie.service";
//9ab7a18b

// const api: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=9ab7a18b';
// const api: string ='https://www.omdbapi.com/?s=car&apikey=9ab7a18b';
const api: string = 'https://cinema-api-pv114.azurewebsites.net/api/movies';
const MoviesList = () => {
    const [movies, setMovies] = useState<IMovieDTO[] | undefined>();
    const navigate = useNavigate();
    let placeholder = [];


    for (let i = 0; i < 4; i++) {
        placeholder.push(
            <Grid key={i} item xs={12} sm={6} md={3} >
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="rectangular" height={350} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton width="90%" height={40} />
                    <Skeleton width="45%" height={40} />
                    <Skeleton width="60%" height={40} />
                </Stack>
            </Grid>
        );
    }



    useEffect(() => {
        // fetch(api).then(res => res.json()).then(data => {
        //     // console.log(data);
        //     // console.log(data.Search);
        //     setMovies(data);
        //     console.log(data);
        // }).catch(err => {
        //     // console.error(err);

        // });
        const dataFetch = async () => {
            const data = await MovieService.movies();
            setMovies(data);
        }
        dataFetch().catch(err => { console.log(err); navigate('/login'); });
    }, []);

    return (
        <>
            <h2>Movies List</h2>
            <Grid container spacing={4}>
                {movies ? (
                    movies?.map((movie, i) =>
                        <Grid key={i} item xs={12} sm={6} md={3} >
                            <MovieCard {...movie} />
                        </Grid>))
                    :
                    (placeholder)
                }

            </Grid>

        </>
    );
}

export default MoviesList;



