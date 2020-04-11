import {USER_SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, LOADING_SEARCH} from "../action/constants";

import { put, takeLatest, call } from 'redux-saga/effects';
import {apiWeather} from "../API/weather";

function* fetchingWeather(action) {


    try {
        // loading
        yield put({type: LOADING_SEARCH, loading: true});

        const weatherResult = yield call(apiWeather.getDataWeatherFromAPI, action.nameCity);
        
        if (weatherResult.list) {
            yield put({type: SEARCH_SUCCESS, weatherData: weatherResult.list, loading: false});
        }
        else {
            yield put({type: SEARCH_FAIL, error: [], loading: false});
        }

    } catch (error) {   

        yield put({type: SEARCH_FAIL, error, loading: false});
    }
}

export function* watchingFetchWeather() {

    yield takeLatest(USER_SEARCH, fetchingWeather);
}