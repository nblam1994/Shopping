import React, { useEffect }  from "react"; 
import { Layout } from 'antd';
import BreadcrumbView from "./partials/BreadcrumbView";
import SiderView from "./partials/SiderView"; 
import Product from "./products//products";
import { useSelector, useDispatch } from 'react-redux';
import {listDataProductSelector, totalItemsSelector, pageSizeSelector} from "../reselects/productReselect";
import {isLoadingCartSelector} from "../reselects/cartReselect";
import { createStructuredSelector } from 'reselect';
import {getListPagingProduct} from "../actions/productAction";
import {addingCart} from "../actions/cartAction";
import LayoutView from "./Layout";
const {Content } = Layout;

// su dung hooks de goi dc ham
const ListProduct = () => {

    const {listProducts, totalItem, pageSize, loadingCart} = useSelector(createStructuredSelector({
        listProducts: listDataProductSelector,
        totalItem: totalItemsSelector,
        pageSize: pageSizeSelector,
        loadingCart: isLoadingCartSelector
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPagingProduct(1,4))
    }, [])
    

    return (
        <LayoutView>
            <Content style={{ padding: '0 50px' }}>
                <BreadcrumbView
                    paramsOne="Home"
                    paramsTwo="User"
                    paramsThree="Order"
                />
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <SiderView/>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Product 
                        listProducts={listProducts} 
                        totalItem={totalItem}
                        pageSize={pageSize}
                        loadData={(start, limit) => dispatch(getListPagingProduct(start, limit))}
                        addCart={(id) => dispatch(addingCart(id))}
                        loadingCart={loadingCart}
                    />
                </Content>
                </Layout>
            </Content>
        </LayoutView>
    )
}

export default React.memo(ListProduct); 