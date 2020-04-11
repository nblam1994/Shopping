import React from "react"
import { Input } from 'antd';
const { Search } = Input;

const InputSearch = (props) => {
    return (
        <>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => props.Click(value)}
            />
        </>
    )
}


export default InputSearch;