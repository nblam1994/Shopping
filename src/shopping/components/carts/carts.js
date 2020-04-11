import React from "react";
import { Row, Col, Typography, InputNumber, Button } from 'antd';
import Img from 'react-image';
const { Text, Paragraph } = Typography;

export const CartItem = (props) => {

    return (
        <>
            <Col span={24}>
            {props.cartList.map((item,index) => (
                <Row key={index}  style={{border: '1px solid #ccc', marginLeft: "3%",marginBottom: "2%", padding: "10px 0px"}}>

                    <Col span={6} style={{paddingLeft: "5%"}}>
                        <Img width={150} height={150} src={item.img} />
                    </Col>
                    <Col span={18} key={item.id}>
                        <Text strong>{item.title}</Text>
                        <Paragraph>{item.desc}</Paragraph>
                        <Paragraph><b>Price</b>: {item.price}</Paragraph>
                        <InputNumber 
                            min={1} 
                            max={100} 
                            defaultValue={item.quantity}
                            onChange={(value) => props.changeQuantity(item.id, value)}
                        />
                        <Paragraph style={{marginTop:"5px"}}>
                            <Button 
                                type="dashed"
                                onClick={() => props.remove(item.id)}
                            >
                                Remove
                            </Button>
                        </Paragraph>
                    </Col>
                </Row>
            ))}
                <Row style={{border: '1px solid #ccc', marginLeft: "2%", padding: "10px", marginBottom:"10px"}}>
                    <Col span={24}>
            <Paragraph strong>Tong tien thanh toan: {props.totalPrice}</Paragraph>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default React.memo(CartItem);