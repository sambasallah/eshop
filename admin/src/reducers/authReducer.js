import { LOGIN_ADMIN, LOGOUT, IS_LOADING, LOGIN_FAILED } from '../actions/types';

let initialState = {
    token: "",
    user: "",
    fullName: "",
    isLoggedIn: false,
    isLoading: false,
    loginFailed: false
};

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_ADMIN:
            return {
                ...state,
                token: action.token,
                user: action.user,
                fullName: action.fullName,
                isLoggedIn: true,
                isLoading: false
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case IS_LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginFailed: true
            }
        default:
            return state;
    }
}

