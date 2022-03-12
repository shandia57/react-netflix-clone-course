import { AppDispatch } from "../store/store";
import * as movie from "../reducers/movie.reducer";
import * as tvShow from "../reducers/tvShow.reducer";
import MOVIES_REQUEST from "./request/MoviesRequest"
import axios from "axios";

const apiMoviesRequests = MOVIES_REQUEST;

export const fetchMoviesAndTvShows = () => (dispatch: AppDispatch) => {
    // console.log("API key = ", process.env.TMDA_API_KEY)
    Promise.all([
        axios.get(apiMoviesRequests.listPopular),
        axios.get(apiMoviesRequests.listAction),
        axios.get(apiMoviesRequests.listComedy),
        axios.get(apiMoviesRequests.listFamily),
        axios.get(apiMoviesRequests.listHorror),

    ])
        .then((data) => {
            dispatch(movie.setMoviePopular(data[0].data.results));
            dispatch(movie.setMovieAction(data[1].data.results));
            dispatch(movie.setMovieComedy(data[2].data.results));
            dispatch(movie.setMovieFamily(data[3].data.results));
            dispatch(movie.setMovieHorror(data[4].data.results));
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
