import {Increment, Decrement} from "../actions/constants"
// khai bao state mac dinh
 const initState = {
    count : 0
 }

 const Counter = (state = initState, action) => {

    console.log(action)
    switch(action.type) {
        case Increment:
            return {
                ...state,
                count: action.val + 1
            }
        case Decrement:
            return {
                ...state,
                count: action.val - 1
            }
        default:
            return state
    }
 }

 export default Counter;