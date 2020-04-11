import {Increment, Decrement} from "./constants"

export const DecrementNumber = (val) => ({
    type: Decrement,
    val
});

export const IncrementNumber = (val) => {
    console.log(val)
    return {
        type: Increment,
        val
    }
}