import React from "react";
import { Provider } from 'react-redux';
import {store, sagaMiddleware, persistor} from './store/store';
import App from "./container/App";
import rootSage from "./saga/rootSaga";
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';

sagaMiddleware.run(rootSage)

class AppMovie extends React.Component {
    render() {

        return (
            <>
                <Provider store={store}>
                    <PersistGate loading={<Spin/>} persistor={persistor}>
                        <App/>
                    </PersistGate>
                </Provider>
            </>
        )
    }
}

export default AppMovie;