import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadItemState, loadCartState, loadOrderID,  saveItemState, saveCartState, saveOrderID } from './localStorage';
import throttle from 'lodash/throttle';

const middleware = [thunk];

const persistedState = {
    products: {
        items: {},
        item: loadItemState(),
        cart: loadCartState(),
        completedOrder: loadOrderID()
    }
};

const store = createStore(rootReducer, persistedState,
                             compose(applyMiddleware(...middleware)));
store.subscribe(throttle(() => {
        saveOrderID(store.getState().products.completedOrder);
        saveItemState(store.getState().products.item);
        saveCartState(store.getState().products.cart);
}, 1000));
export default store;
