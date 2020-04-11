import React from "react"
import { List, Avatar } from 'antd';

// const data = [
//     {
//       title: 'Ant Design Title 1',
//     },
//     {
//       title: 'Ant Design Title 2',
//     },
//     {
//       title: 'Ant Design Title 3',
//     },
//     {
//       title: 'Ant Design Title 4',
//     },
//   ];


class InputSearch extends React.Component {


    render() {

      console.log(this.props.movies);
        return (

            <>
               <List
                    itemLayout="horizontal"
                    dataSource={this.props.movies}
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
            </>
        )
    }
}


export default InputSearch;