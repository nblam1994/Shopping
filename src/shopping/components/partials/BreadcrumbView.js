import React from "react";
import { Breadcrumb } from 'antd';

const BreadcrumbView = (props) => {

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{props.paramsOne}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.paramsTwo}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.paramsThree}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbView; 
