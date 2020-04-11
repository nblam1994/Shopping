import {LOGIN_REQUESTING, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR} from "../actions/constants";


const stateDefault = {

    requesting: false,
    success: false,
    message: [],
    error: []
}

const loginReducer = (state = stateDefault, action) => {


    switch(action.type) {

        case LOGIN_REQUESTING:
            return {
                ...state,
                requesting: true,
                success: false,
                message: [{
                    body: 'Logging in ...',
                    time: new Date()
                }],
                error: []
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                message: [],
                error: []
            }

        case LOGIN_ERROR:
            return {
                ...state,
                error: state.error.concat([{
                    body: action.error.toString(),
                    time: new Date()
                }]),
                message: [],
                success: false,
                requesting: false
            }

        case LOGOUT:
            return {
                ...state,
            }

        
        default:
            return state

    }
}

export default loginReducer;