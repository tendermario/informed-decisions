import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appDux from './appDux';

// import authState from 'dux/authState';

const appReducers = combineReducers({
    // routing: routeReducer,
    // panelReducer
    // authState
    appDux
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;
