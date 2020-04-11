import { all, call } from 'redux-saga/effects';
import {watchingFetchMovie} from "./movieSaga";

export default function* rootSaga() {

    yield all([
        call(watchingFetchMovie)
        // call tiep
    ]);
}