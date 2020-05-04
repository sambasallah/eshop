import { combineReducers } from 'redux';
import adminReducer from './adminReducer';

export default combineReducers({admin: adminReducer});