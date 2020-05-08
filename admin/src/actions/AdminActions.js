import { LOGIN_ADMIN, LOGOUT, IS_LOADING, LOGIN_FAILED } from './types';

export const loginAdmin = (loginDetails) => async (dispatch) => {
    dispatch({
        type: IS_LOADING
    });
    let url = 'http://localhost:8000/api/v1/admin-login';
    let response = await fetch(url, {method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({email: loginDetails.email, password: loginDetails.password})});
    let data = await response.json();
    
    if(data.token) {
        dispatch(
            {
                type: LOGIN_ADMIN,
                token: data.token,
                user: loginDetails.email,
                fullName: data.full_name
            }
        );
    } else {
        dispatch(
            {
                type: LOGIN_FAILED
            }
        )
    }
} 

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
}
