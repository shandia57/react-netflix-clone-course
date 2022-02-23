import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

interface Language {
    id: number,
    title: string
}

let id = 3;

const initialState = true;


const ADD_TODO_ACTION = "ADD_TODO_ACTION";


function languageReducer(state = initialState) {
    return state;
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(languageReducer, composeEnhancers());





export default store;