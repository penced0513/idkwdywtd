import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from './eventReducer';
import groupReducer from './groupReducer';
import inviteReducer from './inviteReducer';


import sessionReducer from './session';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  groups: groupReducer,
  users: userReducer,
  events: eventReducer,
  invites: inviteReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };



  export default configureStore;
