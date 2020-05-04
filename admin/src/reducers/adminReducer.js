import { LOGIN_ADMIN } from '../actions/types';

let initialState = {
    token: "abcd1234"
};

export default function(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

