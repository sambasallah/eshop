import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;