import { all, call } from 'redux-saga/effects';
import {watchFetchProduct} from "./productSaga";
import {watchAddCartProduct} from "./cartSaga";
import {watchLoginUser, watchLogoutUser} from "./loginSaga";

export default function* rootSaga() {

    yield all([
        call(watchFetchProduct),
        call(watchAddCartProduct),
        call(watchLoginUser),
        call(watchLogoutUser)
    ])
}