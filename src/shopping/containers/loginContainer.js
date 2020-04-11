import { connect } from 'react-redux';
import Login from "../components/Login";
import { createStructuredSelector } from 'reselect';
import {loadingLoginReselect, messageLoginReselect, errorLoginReselect} from "../reselects/loginSelect";
import {loginRequest} from "../actions/loginAction";


const mapStateToProps = createStructuredSelector({
    requesting: loadingLoginReselect,
    message: messageLoginReselect,
    error: errorLoginReselect
})

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (username, password) => dispatch(loginRequest(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
