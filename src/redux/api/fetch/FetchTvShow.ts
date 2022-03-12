import { AppDispatch } from "../../store/store";
import * as tvShow from "../../reducers/tvShow.reducer";
import TVSHOWS_REQUEST from "./../request/TvShowsRequest";
import axios from "axios";

const apiTviShowsRequest = TVSHOWS_REQUEST;

export const fetchTvShows = () => (dispatch: AppDispatch) => {
    // console.log("API key = ", process.env.TMDA_API_KEY)
    Promise.all([
        axios.get(apiTviShowsRequest.listPopular),
        axios.get(apiTviShowsRequest.listAnimation),
        axios.get(apiTviShowsRequest.listCrime),
        axios.get(apiTviShowsRequest.listHorror),
        axios.get(apiTviShowsRequest.listReality),
        axios.get(apiTviShowsRequest.listNews),
        axios.get(apiTviShowsRequest.listFamily),
        axios.get(apiTviShowsRequest.listTalk),
        axios.get(apiTviShowsRequest.listKids),

    ])
        .then((data) => {
            dispatch(tvShow.setTvShowPopular(data[0].data.results));
            dispatch(tvShow.setTvShowAnimation(data[1].data.results));
            dispatch(tvShow.setTvShowCrime(data[2].data.results));
            dispatch(tvShow.setTvShowHorror(data[3].data.results));
            dispatch(tvShow.setTvShowReality(data[4].data.results));
            dispatch(tvShow.setTvShowNews(data[5].data.results));
            dispatch(tvShow.setTvShowFamily(data[6].data.results));
            dispatch(tvShow.setTvShowTalk(data[7].data.results));
            dispatch(tvShow.setTvShowKids(data[8].data.results));
        })
        .finally(() => {
            setTimeout(() => {
                dispatch(tvShow.setIsFetched(true))
            }, 2000);
        })
        .catch((e) => {
            console.log(e);
        })

}