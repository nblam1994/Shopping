import {PENDING_ADD_CART, ADD_CART, REMOVE_ITEM_CART, CHANGE_QUANTITY_ITEM_CART} from "./constants";


export const pendingAddCart = () => {
    return {
        type: PENDING_ADD_CART
    }
}

export const addingCart = (id) => {
    //console.log(id)
    return {
        type: ADD_CART,
        id
    }
}

export const removeItemCart = (id) => {

    return {
        type: REMOVE_ITEM_CART,
        id
    }
}

export const changeQuantityItemCart = (id, quantity) => {

    return {
        type: CHANGE_QUANTITY_ITEM_CART,
        id,
        quantity
    }
}