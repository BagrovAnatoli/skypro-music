import {
    signupStartAC, signupSuccessAC, signupErrorAC,
    loginStartAC, loginSuccessAC, loginErrorAC,
    logoutStartAC, logoutSuccessAC, logoutErrorAC,
    getTokenStartAC, getTokenSuccessAC, getTokenErrorAC,
    tokenRefreshStartAC, tokenRefreshSuccessAC, tokenRefreshErrorAC,
} from "../creators/user";

import { userAPI } from '../../../api/api';

export const signup = (username, email, password) => async (dispatch) => {
    dispatch(signupStartAC());

    try {
        const { response } = await userAPI.signup(username, email, password);

        dispatch(signupSuccessAC(response));
    } catch (error) {
        dispatch(signupErrorAC(error));
    }
}

export const login = (email, password) => async (dispatch) => {
    dispatch(loginStartAC());

    try {
        const { response } = await userAPI.login(email, password);

        dispatch(loginSuccessAC(response));
    } catch (error) {
        dispatch(loginErrorAC(error));
    }
}

export const logout = () => async (dispatch) => {
    dispatch(logoutStartAC());

    try {
        const { response } = await userAPI.logout();

        dispatch(logoutSuccessAC(response));
    } catch (error) {
        dispatch(logoutErrorAC(error));
    }
}

export const getToken = (email, password) => async (dispatch) => {
    dispatch(getTokenStartAC());

    try {
        const { response } = await userAPI.getToken(email, password);

        dispatch(getTokenSuccessAC(response));
    } catch (error) {
        dispatch(getTokenErrorAC(error));
    }
}

export const tokenRefresh = (refresh) => async (dispatch) => {
    dispatch(tokenRefreshStartAC());

    try {
        const { response } = await userAPI.tokenRefresh(refresh);

        dispatch(tokenRefreshSuccessAC(response));
    } catch (error) {
        dispatch(tokenRefreshErrorAC(error));
    }
}