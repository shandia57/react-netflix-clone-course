import { AppDispatch } from "../../store/store";
import * as movie from "../../reducers/movie.reducer";
import * as tvShow from "../../reducers/tvShow.reducer";
import MOVIES_REQUEST from "./../request/MoviesRequest"
import axios from "axios";
import { useAppDispatch } from "./../../hooks";
const apiMoviesRequests = MOVIES_REQUEST;

export const fetchMovies = () => () => {
    const dispatch = useAppDispatch();
    Promise.all([
        axios.get(apiMoviesRequests.listPopular),
        axios.get(apiMoviesRequests.listAction),
        axios.get(apiMoviesRequests.listComedy),
        axios.get(apiMoviesRequests.listFamily),
        axios.get(apiMoviesRequests.listHorror),
        axios.get(apiMoviesRequests.listDrama),
        axios.get(apiMoviesRequests.listAnimation),
        axios.get(apiMoviesRequests.listWar),

    ])
        .then((data) => {
            dispatch(movie.setMoviePopular(data[0].data.results));
            dispatch(movie.setMovieAction(data[1].data.results));
            dispatch(movie.setMovieComedy(data[2].data.results));
            dispatch(movie.setMovieFamily(data[3].data.results));
            dispatch(movie.setMovieHorror(data[4].data.results));
            dispatch(movie.setMovieDrama(data[5].data.results));
            dispatch(movie.setMovieAnimation(data[6].data.results));
            dispatch(movie.setMovieWar(data[7].data.results));
        })
        .finally(() => {
            setTimeout(() => {
                dispatch(movie.setIsFetched(true))
            }, 2000);
        })
        .catch((e) => {
            console.log(e);
        })

}