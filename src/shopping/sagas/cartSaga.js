import {put, call, takeEvery} from "redux-saga/effects";
import {PENDING_ADD_CART, ADD_CART, ADD_CART_SUCCESS} from "../actions/constants";
import {api} from "../api/api";


function* addProductToCart(action) {

    try {
     yield put({type: PENDING_ADD_CART, loading: true})

     const detailProduct = yield call(api.getItemById, action.id)

     if(detailProduct) {
        yield put({type: ADD_CART_SUCCESS, detailProduct: detailProduct, loading: false, id: action.id})
     }


        
    } catch(error) {
        throw error
    }
}


export function* watchAddCartProduct() {
    yield takeEvery(ADD_CART, addProductToCart);
}