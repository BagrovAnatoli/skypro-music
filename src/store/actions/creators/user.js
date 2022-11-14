/* eslint-disable no-debugger */
import {
    SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR,
    LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_ERROR,
    GET_TOKEN_START, GET_TOKEN_SUCCESS, GET_TOKEN_ERROR,
    TOKEN_REFRESH_START, TOKEN_REFRESH_SUCCESS, TOKEN_REFRESH_ERROR
} from '../types/user';

export const signupStartAC = () => ({
    type: SIGNUP_START,
});

export const signupSuccessAC = (response) => {
    debugger;
    return {
        type: SIGNUP_SUCCESS,
        response,
    }
};

export const signupErrorAC = (error) => ({
    type: SIGNUP_ERROR,
    error,
});


export const loginStartAC = () => ({
    type: LOGIN_START,
});

export const loginSuccessAC = (response) => ({
    type: LOGIN_SUCCESS,
    response,
});

export const loginErrorAC = (error) => ({
    type: LOGIN_ERROR,
    error,
});


export const logoutStartAC = () => ({
    type: LOGOUT_START,
});

export const logoutSuccessAC = (response) => ({
    type: LOGOUT_SUCCESS,
    response,
});

export const logoutErrorAC = (error) => ({
    type: LOGOUT_ERROR,
    error,
});


export const getTokenStartAC = () => ({
    type: GET_TOKEN_START,
});

export const getTokenSuccessAC = (response) => ({
    type: GET_TOKEN_SUCCESS,
    response,
});

export const getTokenErrorAC = (error) => ({
    type: GET_TOKEN_ERROR,
    error,
});


export const tokenRefreshStartAC = () => ({
    type: TOKEN_REFRESH_START,
});

export const tokenRefreshSuccessAC = (response) => ({
    type: TOKEN_REFRESH_SUCCESS,
    response,
});

export const tokenRefreshErrorAC = (error) => ({
    type: TOKEN_REFRESH_ERROR,
    error,
});