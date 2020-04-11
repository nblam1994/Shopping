import {LOGIN_REQUESTING, LOGOUT, CLIENT_SET_TOKEN, CLIENT_UNSET_TOKEN} from "./constants";

export const loginRequest = (username, password) => {

    return {
        type: LOGIN_REQUESTING,
        username,
        password
    }
}

export const logoutRequest = () => {

    return {
        type: LOGOUT
    }
}

export const setTokenClient = (token) => {

    return {
        type: CLIENT_SET_TOKEN,
        token
    }
}

export const unsetTokenClient = () => {

    return {
        type: CLIENT_UNSET_TOKEN
    }
}