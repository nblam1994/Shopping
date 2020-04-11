import {PENDING_ADD_CART, ADD_CART_SUCCESS, REMOVE_ITEM_CART, CHANGE_QUANTITY_ITEM_CART} from "../actions/constants";
import * as R from 'ramda';

const stateDefault = {
    cartItem: [],
    totalPrice: 0,
    loading: false
}

const cartReducer = (state = stateDefault, action) => {

    switch(action.type) {

        case PENDING_ADD_CART:
            return {
                ...state,
                loading: action.loading
            }

        case ADD_CART_SUCCESS:
            const inforItem = action.detailProduct; // from api - saga
            
            if(!state.cartItem) {
                // add luon vao gio hang
                inforItem.quantity = 1; // mac dinh mua 1 san pham vao gio hang
                // them 1 key quantity
                return {
                    ...state,
                    cartItem: [...state.cartItem, inforItem],
                    totalPrice: state.totalPrice + inforItem.price,
                    loading: action.loading
                }
            } else {
                // kiem tra xem san pham them moi da ton tai chua?
                let item = R.find(R.propEq('id', action.id))(state.cartItem);
                if(!item) {
                    inforItem.quantity = 1;
                    return {
                        ...state,
                        cartItem: [...state.cartItem, inforItem],
                        totalPrice: state.totalPrice + inforItem.price,
                        loading: action.loading
                    }
                }
                else {
                    item.quantity += 1;
                    return {
                        ...state,
                        totalPrice: state.totalPrice + item.price,
                        loading: action.loading
                    }
                }
            }

        case REMOVE_ITEM_CART:
            const itemRemove = R.find(R.propEq('id', action.id))(state.cartItem)
            if(itemRemove){
                // loai bo no
                const newItems = R.filter(cart => cart.id !== itemRemove.id, state.cartItem);
                return {
                    ...state,
                    cartItem: newItems,
                    totalPrice: state.totalPrice - (itemRemove.price * itemRemove.quantity),

                }
            }
            break;

        case CHANGE_QUANTITY_ITEM_CART:

            const itemChanged = R.find(R.propEq('id', action.id))(state.cartItem)

            if(itemChanged) {
                itemChanged.quantity = action.quantity;
                // tinh lai tong ton
                const newTotalMoney = state.cartItem.map(item => item.price*item.quantity).reduce(
                    (prev, next) => prev + next
                );
                return {
                    ...state,
                    totalPrice: newTotalMoney
                }
            }
            break;


        default:
            return state
    }
}

export default cartReducer;