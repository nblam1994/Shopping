import {LOADING_GET_DATA, GET_DATA_MOVIE, GET_DATA_FAIL, GET_DATA_SUCCESS} from "../action/constants";

import { put, takeLatest, call } from 'redux-saga/effects';
import {apiMovie} from "../API/movies";

function* fetchingMovie(action) {
    //console.log(action);
    try {
        // loading
        yield put({type: LOADING_GET_DATA, loading: true});

        const dataMovie = yield call(apiMovie.getDataMovieFromAPI, action.nameMovie);
        //console.log(dataMovie);
        if (dataMovie.results) {
            yield put({type: GET_DATA_SUCCESS, dataMovie: dataMovie.results, loading: false});
        }
        else {
            yield put({type: GET_DATA_FAIL, error: [], loading: false});
        }

    } catch (error) {   

        yield put({type: GET_DATA_FAIL, error, loading: false});
    }
}

export function* watchingFetchMovie() {

    yield takeLatest(GET_DATA_MOVIE, fetchingMovie);
}