import React from "react"
import { List, Avatar } from 'antd';
import LoadingData from "./LoadingData";

const ListMovies = (props) => {

    return (
        <>
            {props.loading ? (<LoadingData/>) : (
                <List
                    itemLayout="horizontal"
                    dataSource={props.movies}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.overview}
                        />
                    </List.Item>
                    )}
                />
            )}
            
        </>
    )
}


export default ListMovies;