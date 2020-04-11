import React from "react";
import HeaderView from "./partials/HeaderView";
import FooterView from "./partials/FooterView";

const Layout = (props) => {

    return (
        <>
            <HeaderView/>
            {props.children}
            <FooterView/>
        </>
    )
}

export default Layout; 