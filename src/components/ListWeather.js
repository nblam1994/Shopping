import React from "react";
import {List, Avatar } from 'antd';


class ListWeather extends React.Component {


    render() {
        //console.log(this.props.weather)
        return (

            <>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.weather}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={item.main.temp}
                        description={item.main.humidity}
                        />
                    </List.Item>
                    )}
                />,
             </>
        )
    } 
}

export default ListWeather;