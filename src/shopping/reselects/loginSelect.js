import { createSelector } from 'reselect';

const loginReselect = state => state.loginReducer;

export const loadingLoginReselect = createSelector(
    loginReselect,
    state => state.requesting
)


export const messageLoginReselect = createSelector(
    loginReselect,
    state => state.message
)


export const errorLoginReselect = createSelector(
    loginReselect,
    state => state.error
)
