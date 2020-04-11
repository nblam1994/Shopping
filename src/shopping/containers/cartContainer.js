import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {isLoadingCartSelector, totalPriceSelector, cartItemSelector} from "../reselects/cartReselect";
import CartProduct from "../components/CartProduct";
import {removeItemCart, changeQuantityItemCart} from "../actions/cartAction";

const mapStateToProps = createStructuredSelector({
    cartList: cartItemSelector,
    loading: isLoadingCartSelector,
    totalPrice: totalPriceSelector,
})



const mapDispatchToProps = dispatch => {
    return {
        removeItemCart: (id) => dispatch(removeItemCart(id)),
        changeQuantity: (id, quantity) => dispatch(changeQuantityItemCart(id, quantity))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);