import {LOADING_GET_DATA_PRODUCT, GET_LIST_DATA_PRODUCT, GET_LIST_DATA_SUCCESS, GET_LIST_DATA_FAIL} from "../actions/constants";
import {put, call, takeEvery} from "redux-saga/effects";
import {api} from "../api/api";

function* fetchProduct(action) {

    try {

        yield put({type: LOADING_GET_DATA_PRODUCT, loading: true});

        const receivedData = yield call(api.getDataProductByPage, action.page, action.limit);

        ////console.log(receivedData);
        if(receivedData){
            yield put({type: GET_LIST_DATA_SUCCESS, receivedData, loading: false})
        }
        else {
            yield put({type: GET_LIST_DATA_FAIL, loading: false, error: []})
        }

    } catch(error) {

        yield put({type: GET_LIST_DATA_FAIL, error, loading: false});
    }
}

export function* watchFetchProduct(){
    yield takeEvery(GET_LIST_DATA_PRODUCT, fetchProduct);
}