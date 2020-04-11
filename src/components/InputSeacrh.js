import React from "react"
import { Input } from 'antd';
const { Search } = Input;
// import './antd/dist/antd.css';

class InputSearch extends React.Component {


    render() {

        return (

            <>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => this.props.Click(value)}
                />
            </>
        )
    }
}


export default InputSearch;