import {LOADING_GET_DATA_PRODUCT, GET_LIST_DATA_PRODUCT} from "./constants";


export const startLoadingData = () => {
    return {
        type: LOADING_GET_DATA_PRODUCT
    }
}

export const getListPagingProduct = (page, limit) => {
    return {
        type: GET_LIST_DATA_PRODUCT,
        page,
        limit
    }
}