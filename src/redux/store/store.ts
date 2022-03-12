import { configureStore } from '@reduxjs/toolkit';
import languageReducer from "../reducers/language.reducer";
import movieReducer from '../reducers/movie.reducer';
import tvShowReducer from '../reducers/tvShow.reducer';
import userReducer from "../reducers/user.reducer";

const store = configureStore({
    reducer: {
        language: languageReducer,
        user: userReducer,
        movie: movieReducer,
        tvShow: tvShowReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;


// Redux -> à importer pour pouvoir dispatcher les datas
// import { useAppDispatch, useAppSelector } from "./../../../redux/hooks";

// EXEMPLE: import ce reducer pour pouvoir utiliser ses fonctions
// import { setAppLanguage } from "./../../../redux/reducers/language.reducer";


// ****** EXEMPLE
// const dispacth = useAppDispatch();
// const currentLanguage = useAppSelector((state) => state.language.appLanguage)

// const handleLanguageChange = (e: any) => {
//     dispacth(setAppLanguage(e.target.value))
// }