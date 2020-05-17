import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { loadTokenState, loadLoggedInState, 
    loadUserState, loadFullNameState, saveTokenState, 
    saveLoggedInState, saveUserState, saveFullNameState } from './localStorage';
import throttle from 'lodash/throttle';

const middleware = [thunk];

let persistedState = {
   auth: {
        token: loadTokenState(),
        user: loadUserState(),
        isLoggedIn: loadLoggedInState(),
        fullName: loadFullNameState(),
        isLoading: false,
        loginFailed: false
    }
} 

const store = createStore(rootReducer, persistedState,
    compose(applyMiddleware(...middleware)));

store.subscribe(throttle(() => {
    saveTokenState(store.getState().auth.token);
    saveLoggedInState(store.getState().auth.isLoggedIn);
    saveUserState(store.getState().auth.user);
    saveFullNameState(store.getState().auth.fullName);
}, 1000));

export default store;