import React from "react";
import { Card , Row, Col, Pagination, Button, message} from 'antd';
import Img from 'react-image';
import { AiOutlineShoppingCart } from "react-icons/ai";

const { Meta } = Card;

const addCart = (props, id) => {
    //console.log(props, id);
    props.addCart(id);
    
    if(!props.loadingCart) {
        message.success("Add thanh cong", 2)
    }

}

const ItemInRow = (props) => {
    
    //console.log(props);
    return (
        <>
            <Row gutter={16}>
                {props.listProducts.map( (item, index) => {
                    return (
                        <Col span={6} key={props.row + "-" + index}>
                            <Card
                                key={props.row + "-" + index}
                                hoverable
                                style={{ width: 240, marginTop:'20px' }}
                                cover={<Img alt={item.title} src={item.img} />}
                            >
                                <Meta title={item.title + " -    $ " + item.price} description={item.desc} />
                                <Button 
                                    type="primary" 
                                    style={{marginTop: '20px'}}
                                    onClick={() => addCart(props, item.id)}
                                >
                                   <AiOutlineShoppingCart size="medium"/>
                                </Button>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Row type="flex" align="middle" style={{marginTop: '10px'}}> 
                <Pagination 
                    defaultCurrent={1} 
                    total={props.totalItem}
                    pageSize={props.pageSize}
                    showTitle={true}
                    onChange={(current, size) => props.loadData(current, size) }
                />
            </Row>
        </>
    )
} 

export default React.memo(ItemInRow);