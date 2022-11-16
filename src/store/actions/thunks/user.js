import {
    signupStartAC, signupSuccessAC, signupErrorAC,
    loginStartAC, loginSuccessAC, loginErrorAC,
    logoutStartAC, logoutSuccessAC, logoutErrorAC,
    getTokenStartAC, getTokenSuccessAC, getTokenErrorAC,
    tokenRefreshStartAC, tokenRefreshSuccessAC, tokenRefreshErrorAC,
} from "../creators/user";

import { userAPI } from '../../../api/api';
import { setCookie } from "../../../utils/setCookie";

export const signup = (username, email, password) => async (dispatch) => {
    dispatch(signupStartAC());

    try {
        const { response } = await userAPI.signup(username, email, password);
        dispatch(signupSuccessAC(response));
    } catch (error) {
        dispatch(signupErrorAC(error));
    }
}

export const getToken = (email, password) => async (dispatch) => {
    
    dispatch(getTokenStartAC());

    try {
        
        const response = await userAPI.getToken(email, password);

        dispatch(getTokenSuccessAC(response));
        console.log('after dispatch(getTokenSuccessAC())');
        setCookie('token', response.data.access);
    } catch (error) {
        dispatch(getTokenErrorAC(error));
    }
}

export const login = (email, password) => async (dispatch) => {
    dispatch(loginStartAC());

    try {
        
        const loginResponse = await userAPI.login(email, password);

        dispatch(loginSuccessAC(loginResponse));
        
        dispatch(getToken(email, password));
    } catch (error) {
        dispatch(loginErrorAC(error));
    }
}

export const logout = () => async (dispatch) => {
    dispatch(logoutStartAC());

    try {
        const response = await userAPI.logout();

        dispatch(logoutSuccessAC(response));
    } catch (error) {
        dispatch(logoutErrorAC(error));
    }
}

export const tokenRefresh = (refresh) => async (dispatch) => {
    dispatch(tokenRefreshStartAC());

    try {
        const response = await userAPI.tokenRefresh(refresh);

        dispatch(tokenRefreshSuccessAC(response));
    } catch (error) {
        dispatch(tokenRefreshErrorAC(error));
    }
}