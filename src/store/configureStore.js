import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import reducer from "./reducers";


const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
    combineReducers({
        ...reducers,
        reducer
    }),
    preloadedState,
    compose(
        applyMiddleware(...middlewares, thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default () => configureStore();