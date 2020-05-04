import { LOGIN_ADMIN } from './types';



const loginAdmin = () => dispatch => {
    dispatch(
        {
            type: LOGIN_ADMIN,
        }
    )
}