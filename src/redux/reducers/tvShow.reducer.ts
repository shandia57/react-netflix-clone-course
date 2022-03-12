import { createSlice } from '@reduxjs/toolkit';


interface ITvShow {
    isFetched: boolean,
    popular: any[],
    animation: any[],
    crime: any[],
    horror: any[],
    reality: any[],
    news: any[],
    family: any[],
    talk: any[],
    kids: any[],

}

const initialState: ITvShow = {
    isFetched: false,
    popular: [],
    animation: [],
    crime: [],
    horror: [],
    reality: [],
    news: [],
    family: [],
    talk: [],
    kids: [],
}


const setPopularState = (state: ITvShow, action: any) => {
    state.popular = action.payload;
}

const setAnimationState = (state: ITvShow, action: any) => {
    state.animation = action.payload;
}

const setCrimeState = (state: ITvShow, action: any) => {
    state.crime = action.payload;
}

const setHorrorState = (state: ITvShow, action: any) => {
    state.horror = action.payload;
}


const setRealityState = (state: ITvShow, action: any) => {
    state.reality = action.payload;
}

const setNewsState = (state: ITvShow, action: any) => {
    state.news = action.payload;
}

const setFamilyState = (state: ITvShow, action: any) => {
    state.family = action.payload;
}

const setTalkState = (state: ITvShow, action: any) => {
    state.talk = action.payload;
}
const setKidsState = (state: ITvShow, action: any) => {
    state.kids = action.payload;
}



const setIsFetchedState = (state: ITvShow, action: any) => {
    state.isFetched = action.payload
}

export const tvShowSlice = createSlice({
    name: 'tvShow',
    initialState,
    reducers: {
        setTvShowPopular: (state, action) => setPopularState(state, action),
        setTvShowAnimation: (state, action) => setAnimationState(state, action),
        setTvShowCrime: (state, action) => setCrimeState(state, action),
        setTvShowHorror: (state, action) => setHorrorState(state, action),
        setTvShowReality: (state, action) => setRealityState(state, action),
        setTvShowNews: (state, action) => setNewsState(state, action),
        setTvShowTalk: (state, action) => setTalkState(state, action),
        setTvShowFamily: (state, action) => setFamilyState(state, action),
        setTvShowKids: (state, action) => setKidsState(state, action),

        setIsFetched: (state, action) => setIsFetchedState(state, action)
    }

})


export const {
    setTvShowPopular,
    setTvShowAnimation,
    setTvShowCrime,
    setTvShowHorror,
    setTvShowReality,
    setTvShowNews,
    setTvShowTalk,
    setTvShowFamily,
    setTvShowKids,
    setIsFetched,

} = tvShowSlice.actions;



export default tvShowSlice.reducer;