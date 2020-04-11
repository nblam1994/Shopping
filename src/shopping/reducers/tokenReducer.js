import {CLIENT_SET_TOKEN, CLIENT_UNSET_TOKEN} from "../actions/constants";


const stateDefault = {
    token: null
}


const tokenReducer = (state = stateDefault, action) => {


    switch(action.type) {

        case CLIENT_SET_TOKEN:
            return {
                ...state,
                token: action.token
            }

        case CLIENT_UNSET_TOKEN:
            return {
                ...state,
                token: null
            }

        default:
            return state
    }
}

export default tokenReducer;