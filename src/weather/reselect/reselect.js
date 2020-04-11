import { createSelector } from 'reselect'

// state lon nhat
const weatherReselect = state => state.weatherReducer

// state list movies
export const listWeatherSelector =  createSelector(
    weatherReselect,
    item => item.weatherData
);

// state loading 
export const isLoadingSelector = createSelector(
    weatherReselect,
    item => item.loading
);