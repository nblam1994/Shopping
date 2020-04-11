import { createSelector } from 'reselect';


const cartReselect = state => state.carts;


export const isLoadingCartSelector = createSelector(
    cartReselect,
    state => state.loading
)

export const totalPriceSelector = createSelector(
    cartReselect,
    state => state.totalPrice
)

export const cartItemSelector = createSelector(
    cartReselect,
    state => state.cartItem
)

