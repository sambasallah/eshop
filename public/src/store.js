import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const middleware = [thunk];

const persistedState = {
    products: {
        items: [],
        item: loadState()
    }
};

const store = createStore(rootReducer, persistedState,
                             compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
store.subscribe(throttle(() => {
        saveState(store.getState().products.item);
}, 1000));
export default store;
