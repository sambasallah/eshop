import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { loadTokenState, loadLoggedInState, saveTokenState, saveLoggedInState } from './localStorage';
import throttle from 'lodash/throttle';

const middleware = [thunk];

let persistedState = {
   auth: {
        token: loadTokenState(),
        isLoggedIn: loadLoggedInState()
    }
} 

const store = createStore(rootReducer, persistedState,
    compose(applyMiddleware(...middleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(throttle(() => {
    saveTokenState(store.getState().auth.token);
    saveLoggedInState(store.getState().auth.isLoggedIn);
}, 1000));

export default store;