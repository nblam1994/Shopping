import React from "react"
import App from './containers/App';
import { Provider } from 'react-redux';
import {store} from './strore/configStore'

class AppRedux extends React.Component {
    render() {

        return (
            <>
                <Provider store={store}>
                    <App/>
                </Provider>
            </>
        )
    }
}

export default AppRedux;