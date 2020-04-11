import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import {isLoadingSelector, listDataProductSelector, totalItemsSelector, pageSizeSelector} from "../reselects/productReselect";
//import {getListPagingProduct} from "../actions/productAction";

import ListProduct from "../components/ListProduct";


// const mapStateToProps = createStructuredSelector({
//     listProducts: listDataProductSelector,
//     loading: isLoadingSelector,
//     totalItem: totalItemsSelector,
//     pageSize: pageSizeSelector
// })

// const mapDispatchToProps = dispatch => ({
//     loadData: (page, limit) => dispatch(getListPagingProduct(page, limit))
// })

export default connect(null, null)(ListProduct);

