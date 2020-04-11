import { combineReducers } from 'redux';
import weatherReducer from "./weatherReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//save state in localStorage
// danh cho toan bo dung dung
const rootPersitsConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['loading', 'error']
}

const dataWeatherPersistConfig = {
    key: 'dataWeather',
    storage: storage,
    blacklist: ['loading', 'error']
}

const rootReducer = combineReducers({
    weatherReducer: persistReducer(dataWeatherPersistConfig, weatherReducer)
    // co nhieu reducer truyen vao day
});

export default persistReducer(rootPersitsConfig, rootReducer);