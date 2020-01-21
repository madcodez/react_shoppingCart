export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';



export const loadUser = () => (dispatcher, getState) => {

    dispatcher({ type: USER_LOADING });

    var user = localStorage.getItem('user')

    if (user) {
        dispatcher({
            type: USER_LOADED,
            payload: user
        })
    }
}


export const register = (user) => (dispatcher, getState) => {

    dispatcher({ type: REGISTER_SUCCESS, payload: user });



}