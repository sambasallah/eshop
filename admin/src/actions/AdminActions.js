import { LOGIN_ADMIN } from './types';

export const loginAdmin = (loginDetails) => async (dispatch) => {
    let url = 'http://localhost:8000/api/v1/admin-login';
    let response = await fetch(url, {method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({email: loginDetails.email, password: loginDetails.password})});
    let data = await response.json();
    
    if(data) {
        dispatch(
            {
                type: LOGIN_ADMIN,
                payload: data.token
            }
        );
    }
}  