import { createSelector } from 'reselect'

// state lon nhat
const movieReselct = state => state.movieReducer

// state list movies
export const listMovieSelector =  createSelector(
    movieReselct,
    item => item.dataMovie
);

// state loading 
export const isLoadingSelector = createSelector(
    movieReselct,
    item => item.loading
);