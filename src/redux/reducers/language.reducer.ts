import { createSlice } from '@reduxjs/toolkit';

interface ILanguage {
    appLanguage: string;
}

const initialState: ILanguage = {
    appLanguage: localStorage.getItem('language') ?? "fr-FR",
}

const setAppLanguageState = (state: ILanguage, action: any) => {
    state.appLanguage = action.payload;
    localStorage.setItem('language', state.appLanguage);
}

//Definition des setter que tu veux rendre dispo
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setAppLanguage: (state, action) => setAppLanguageState(state, action)
    }
})

//Dispatchable
export const { setAppLanguage } = languageSlice.actions;

export default languageSlice.reducer