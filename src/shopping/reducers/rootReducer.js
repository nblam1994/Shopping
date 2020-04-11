import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import productRedcuer from "./productReducer";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
import tokenReducer from "./tokenReducer";

const dataProductsPersistConfig = {
    key: 'listDataProducts',
    storage: storage,
    whitelist: ['products']
}

const dataCartPersistConfig = {
    key: 'cartData',
    storage: storage,
    whitelist: ['carts']
}


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    products: persistReducer(dataProductsPersistConfig, productRedcuer),
    carts: persistReducer(dataCartPersistConfig, cartReducer),
    loginReducer,
    tokenReducer
})

export default rootReducer;