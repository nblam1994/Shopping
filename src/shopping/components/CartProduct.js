import React from "react"; 
import { Layout } from 'antd';
import BreadcrumbView from "./partials/BreadcrumbView";
import SiderView from "./partials/SiderView"; 
import CartItem from "./carts/carts";
import LayoutView from "./Layout";
const {Content } = Layout;

class CartProduct extends React.PureComponent {

    render() {
        return (
            <LayoutView>
                <Content style={{ padding: '0 50px' }}>
                    <BreadcrumbView 
                        paramsOne="Cart"
                        paramsTwo="Phone"
                        paramsThree="Email"
                    />
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <SiderView/>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <CartItem 
                            cartList={this.props.cartList}
                            totalPrice={this.props.totalPrice}
                            remove={this.props.removeItemCart}
                            changeQuantity={this.props.changeQuantity}
                        />
                    </Content>
                    </Layout>
                </Content>
            </LayoutView>
        )
    }
}

export default CartProduct; 