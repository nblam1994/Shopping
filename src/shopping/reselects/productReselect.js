import { createSelector } from 'reselect';


const shoppingReselect = state => state.products;


export const isLoadingSelector = createSelector(
    shoppingReselect,
    state => state.loading
)

export const listDataProductSelector = createSelector(
    shoppingReselect,
    state => state.dataProducts
)

export const totalItemsSelector = createSelector(
    shoppingReselect,
    state => state.totalItems
)

export const pageSizeSelector = createSelector(
    shoppingReselect,
    state => state.pageSize
)


