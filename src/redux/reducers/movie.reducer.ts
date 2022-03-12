import { createSlice } from '@reduxjs/toolkit';



interface IMovie {
    isFetched: boolean,
    popular: any[],
    action: any[],
    comedy: any[],
    family: any[],
    horror: any[],
    drama: any[],
    animation: any[],
    war: any[],
}

const initialState: IMovie = {
    isFetched: false,
    popular: [],
    action: [],
    comedy: [],
    family: [],
    horror: [],
    drama: [],
    animation: [],
    war: [],
}


const setPopularState = (state: IMovie, action: any) => {
    state.popular = action.payload;
}

const setActionState = (state: IMovie, action: any) => {
    state.action = action.payload;
}

const setComedyState = (state: IMovie, action: any) => {
    state.comedy = action.payload;
}

const setFamilyState = (state: IMovie, action: any) => {
    state.family = action.payload;
}

const setHorrorState = (state: IMovie, action: any) => {
    state.horror = action.payload;
}

const setDramaState = (state: IMovie, action: any) => {
    state.drama = action.payload;
}

const setAnimationState = (state: IMovie, action: any) => {
    state.animation = action.payload;
}

const setWarState = (state: IMovie, action: any) => {
    state.war = action.payload;
}



const setIsFetchedState = (state: IMovie, action: any) => {
    state.isFetched = action.payload
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMoviePopular: (state, action) => setPopularState(state, action),
        setMovieAction: (state, action) => setActionState(state, action),
        setMovieComedy: (state, action) => setComedyState(state, action),
        setMovieFamily: (state, action) => setFamilyState(state, action),
        setMovieHorror: (state, action) => setHorrorState(state, action),
        setMovieDrama: (state, action) => setDramaState(state, action),
        setMovieAnimation: (state, action) => setAnimationState(state, action),
        setMovieWar: (state, action) => setWarState(state, action),
        setIsFetched: (state, action) => setIsFetchedState(state, action)
    }

})


export const {
    setMoviePopular,
    setMovieAction,
    setMovieComedy,
    setMovieFamily,
    setMovieHorror,
    setMovieDrama,
    setMovieAnimation,
    setMovieWar,
    setIsFetched
} = movieSlice.actions;



export default movieSlice.reducer;