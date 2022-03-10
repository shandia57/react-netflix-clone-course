import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    email: string;
}

const initialState: IUser = {
    email: "kiki",
}



const setUserEmailState = (state: IUser, action: any) => {
    state.email = action.payload;
    console.log("fils de pute de tes morts ", state.email);
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserEmail: (state, action) => setUserEmailState(state, action)
    }

})

export const { setUserEmail } = userSlice.actions;

export default userSlice.reducer;