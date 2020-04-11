import {LOADING_GET_DATA_PRODUCT, GET_LIST_DATA_SUCCESS, GET_LIST_DATA_FAIL} from "../actions/constants";


const stateDefault = {
    loading: false,
    dataProducts: [],
    totalItems: 0,
    pageSize: 0,
    error: null
}

const productReducer = (state = stateDefault, action) => {

    switch(action.type) {

        case LOADING_GET_DATA_PRODUCT:
            return {
                ...state,
                loading: action.loading
            }

        case GET_LIST_DATA_SUCCESS:
            return {
                ...state,
                dataProducts: action.receivedData.products,
                totalItems: action.receivedData.total,
                pageSize: action.receivedData.pageSize,
                loading: action.loading
            }

        case GET_LIST_DATA_FAIL:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            }

        default:
            return state
    }
}

export default productReducer