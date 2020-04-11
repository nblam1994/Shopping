import {USER_SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, LOADING_SEARCH} from "../action/constants";

const initState = {
    loading: false,
    weatherData: [],
    error: null
}

export const weatherReducer = (state=initState, action) => {

    switch (action.type) {
        case LOADING_SEARCH:
            return {
                ...state,
                loading: action.loading
            }
        
        case SEARCH_SUCCESS:
            return {
                ...state,
                weatherData: action.weatherData,
                loading: action.loading
            }

        case SEARCH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: action.loading
            }
    
        default:
            return state
    }
}

export default weatherReducer