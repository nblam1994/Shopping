import { createStore , applyMiddleware} from 'redux';
import rootPersistReducer from '../reducer/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist';

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootPersistReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

