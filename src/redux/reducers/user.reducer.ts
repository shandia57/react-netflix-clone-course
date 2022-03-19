import { createSlice } from '@reduxjs/toolkit';

interface Users {
    account: string;
    accountDetails: UserDetails[]
}

interface UserDetails {
    username: string;
    image: string;

}


interface IUser {
    email: string;
    username: string;
    users: Users[];
}

const initialState: IUser = {
    email: localStorage.getItem('email') ?? '',
    username: '',
    users: [],
}

const setUserEmailState = (state: IUser, action: any) => {
    state.email = action.payload;
    localStorage.setItem('email', state.email);
}

const setUsersState = (state: IUser, action: any) => {
    state.users.push(action.payload);
}

const setUserNameState = (state: IUser, action: any) => {
    state.username = action.payload;
}

const setUsersAccountDetailsState = (state: IUser, action: any) => {
    for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].account === state.email) {
            state.users[i].accountDetails.push(action.payload);
        }
    }
}

const updateUserNameState = (state: IUser, action: any) => {
    for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].account === state.email) {
            for (let j = 0; j < state.users[i].accountDetails.length; j++) {
                if (state.users[i].accountDetails[j].username === state.username) {
                    state.users[i].accountDetails[j].username = action.payload;
                    state.username = action.payload;
                }
            }
        }
    }
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserEmail: (state, action) => setUserEmailState(state, action),
        setUsers: (state, action) => setUsersState(state, action),
        setUsersAccountDetails: (state, action) => setUsersAccountDetailsState(state, action),
        setUserName: (state, action) => setUserNameState(state, action),
        updateUserName: (state, action) => updateUserNameState(state, action),
    }

})

export const
    {
        setUserEmail,
        setUsers,
        setUserName,
        updateUserName,
        setUsersAccountDetails
    } = userSlice.actions;

export default userSlice.reducer;