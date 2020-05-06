import { LOGIN_ADMIN } from '../actions/types';

let initialState = {
    token: "",
    isLoggedIn: false,
    redirect: false
};

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_ADMIN:
            return {
                ...state,
                token: action.payload,
                isLoggedIn: true,
                redirect: true
            }
        default:
            return state;
    }
}

