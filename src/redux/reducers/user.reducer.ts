import { createSlice } from '@reduxjs/toolkit';

interface Users {
    account: string;
    accountDetails: UserDetails[];
}

interface WatchList {
    type: string;
    id: string;
}

interface UserDetails {
    username: string;
    image: string;
    watchList: WatchList[];
}


interface IUser {
    email: string;
    username: string;
    users: Users[];
}

const initialState: IUser = {
    email: localStorage.getItem('email') ?? '',
    username: localStorage.getItem('username') ?? '',
    users: JSON.parse(localStorage.getItem('users')!) ?? [],
}

const setUserEmailState = (state: IUser, action: any) => {
    state.email = action.payload;
    localStorage.setItem('email', state.email);
}

const setUserNameState = (state: IUser, action: any) => {
    state.username = action.payload;
    localStorage.setItem('username', state.username);
}

const setUsersState = (state: IUser, action: any) => {
    state.users.push(action.payload);
    localStorage.setItem('users', JSON.stringify(state.users));
}


const setUsersAccountDetailsState = (state: IUser, action: any) => {
    for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].account === state.email) {
            state.users[i].accountDetails.push(action.payload);
        }
    }
    localStorage.setItem('users', JSON.stringify(state.users));
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
    localStorage.setItem('username', state.username);
    localStorage.setItem('users', JSON.stringify(state.users));
}

const updateWatchlistState = (state: IUser, action: any) => {
    for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].account === state.email) {
            for (let j = 0; j < state.users[i].accountDetails.length; j++) {
                if (state.users[i].accountDetails[j].username === state.username) {
                    state.users[i].accountDetails[j].watchList.push(action.payload);
                }
            }
        }
    }
    localStorage.setItem('users', JSON.stringify(state.users));
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
        setWatchlist: (state, action) => updateWatchlistState(state, action),
    }

})

export const
    {
        setUserEmail,
        setUsers,
        setUserName,
        updateUserName,
        setUsersAccountDetails,
        setWatchlist,
    } = userSlice.actions;

export default userSlice.reducer;