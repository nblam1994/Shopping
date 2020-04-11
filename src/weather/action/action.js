import {USER_SEARCH, LOADING_SEARCH} from "./constants"


export const getDataWeather = (nameCity) => ({
    type: USER_SEARCH,
    nameCity
})

export const loadingSearch = () => ({
    type: LOADING_SEARCH,
})