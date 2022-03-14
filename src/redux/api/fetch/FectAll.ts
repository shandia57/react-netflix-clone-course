import { AppDispatch } from "../../store/store";
import * as movie from "../../reducers/movie.reducer";
import * as tvShow from "../../reducers/tvShow.reducer";
import MOVIES_REQUEST from "./../request/MoviesRequest"
import TVSHOWS_REQUEST from "./../request/TvShowsRequest";

import axios from "axios";

const apiMoviesRequests = MOVIES_REQUEST;
const apiTviShowsRequest = TVSHOWS_REQUEST;


export const FetchAll = () => (dispatch: AppDispatch) => {
    Promise.all([
        axios.get(apiMoviesRequests.listPopular),
        axios.get(apiMoviesRequests.listAction),
        axios.get(apiMoviesRequests.listComedy),
        axios.get(apiMoviesRequests.listFamily),
        axios.get(apiMoviesRequests.listHorror),


        axios.get(apiTviShowsRequest.listPopular),
        axios.get(apiTviShowsRequest.listAnimation),
        axios.get(apiTviShowsRequest.listCrime),
        axios.get(apiTviShowsRequest.listReality),
        axios.get(apiTviShowsRequest.listKids),

    ])
        .then((data) => {
            dispatch(movie.setMoviePopular(data[0].data.results));
            dispatch(movie.setMovieAction(data[1].data.results));
            dispatch(movie.setMovieComedy(data[2].data.results));
            dispatch(movie.setMovieFamily(data[3].data.results));
            dispatch(movie.setMovieHorror(data[4].data.results));

            dispatch(tvShow.setTvShowPopular(data[5].data.results));
            dispatch(tvShow.setTvShowAnimation(data[6].data.results));
            dispatch(tvShow.setTvShowCrime(data[7].data.results));
            dispatch(tvShow.setTvShowReality(data[8].data.results));
            dispatch(tvShow.setTvShowKids(data[9].data.results));
        })
        .finally(() => {
            dispatch(movie.setIsFetched(true))
        })
        .catch((e) => {
            console.log(e);
        })

}


export const FetchSingle = (id: string) => (dispatch: AppDispatch) => {
    console.log("id : ", id)
    // dispatch(movie.setIsFetched(false))

    // Promise.all([
    //     axios.get(apiMoviesRequests.listPopular),
    // ])
    //     .then((data) => {
    //         // dispatch(tvShow.setTvShowKids(data[9].data.results));
    //     })
    //     .finally(() => {
    //         dispatch(movie.setIsFetched(true))
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })

}