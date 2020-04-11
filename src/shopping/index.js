import React, { lazy, Suspense } from "react";
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import "./components/Loading.css";
import LoadingData from "./components/LoadingData";
import { Spin } from 'antd';
import { Layout } from 'antd';
import {
    Switch,
    Route
  } from "react-router-dom";


import configStore from "./store/store";
const {store, persistor, history} = configStore({}); 


const ListProduct = lazy(() => import('./containers/productContainer'));
const CartProduct = lazy(() => import('./containers/cartContainer'));
const Login = lazy(() => import('./containers/loginContainer'));

const renderLoader = () => <LoadingData/>

const Shopping = () => {

    return (
        <>
            <Provider store={store}>
                <PersistGate 
                    loading={<Spin/>}
                    persistor={persistor}
                >
                    <ConnectedRouter history={history}>
                        <Layout>
                            <Suspense fallback={renderLoader()}>
                                <Switch>
                                    <Route path="/home">
                                        <ListProduct />
                                    </Route>
                                    <Route path="/cart">
                                        <CartProduct />
                                    </Route>
                                    <Route path="/login">
                                        <Login/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </Layout>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </>
    )
}

export default Shopping;