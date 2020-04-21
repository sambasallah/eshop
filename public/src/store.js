import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadItemState, loadCartState,  saveItemState, saveCartState } from './localStorage';
import throttle from 'lodash/throttle';

const middleware = [thunk];

const persistedState = {
    products: {
        items: [],
        item: loadItemState(),
        cart: loadCartState()
    }
};

const store = createStore(rootReducer, persistedState,
                             compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
store.subscribe(throttle(() => {
        saveItemState(store.getState().products.item);
        saveCartState(store.getState().products.cart);
}, 1000));
export default store;
