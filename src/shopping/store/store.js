import { createStore , applyMiddleware, compose} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "connected-react-router";
import storage from 'redux-persist/lib/storage';

import history from "../history/history";
import rootReducer from '../reducers/rootReducer';
import rootSaga from "../sagas/rootSaga";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['router', 'products']
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer(history));
const sagaMiddleware = createSagaMiddleware();
const configStore = (state = {}) => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        persistedReducer,
        state,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return { store, persistor, history };
}

export default configStore;

