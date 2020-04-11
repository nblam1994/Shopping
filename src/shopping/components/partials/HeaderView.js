import React from "react"; 
import { NavLink } from "react-router-dom";
import { Layout, Menu } from 'antd';
import jwt from 'jsonwebtoken';
import {KEY_TOKEN} from "../../actions/constants"
const { Header } = Layout;


const getToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if(token) {

        try {

            const decode = jwt.verify(token, KEY_TOKEN)
            const {username} = decode;
            return username;
        } catch(error) {
            return `loi token ${JSON.stringify(error)}`;
        }
    }

    return null;
}

const HeaderView = () => {

    const username = getToken();
    return (
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/cart">
                        Cart
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                        {username}
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderView; 