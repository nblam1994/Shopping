import { all, call } from 'redux-saga/effects';
import {watchingFetchWeather} from "./weatherSaga";

export default function* rootSaga() {

    yield all([
        call(watchingFetchWeather)
        // call tiep
    ]);
}