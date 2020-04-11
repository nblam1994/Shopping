import { combineReducers } from 'redux';
import movieReducer from "./movieReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//save state in localStorage
// danh cho toan bo dung dung
const rootPersitsConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['loading', 'error']
}

const dataMoviePersistConfig = {
    key: 'dataMovie',
    storage: storage,
    blacklist: ['loading', 'error']
}

const rootReducer = combineReducers({
    movieReducer: persistReducer(dataMoviePersistConfig, movieReducer)
    // co nhieu reducer truyen vao day
});

export default persistReducer(rootPersitsConfig,rootReducer);