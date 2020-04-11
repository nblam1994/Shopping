import {LOADING_GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL} from "../action/constants";

const initState = {
    loading: false,
    dataMovie: [],
    error: null
}

const moviesReducer = (state = initState, action) => {

    switch (action.type) {

        case LOADING_GET_DATA:
            return {
                ...state,
                loading: action.loading //true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                dataMovie: action.dataMovie,
                loading:  action.loading // false
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                error: action.error,
                loading: action.loading
            }
        
        default:
            return state
    }
}

export default moviesReducer