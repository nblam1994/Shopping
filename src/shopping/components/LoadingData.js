import React from "react"
import { Spin } from 'antd';
import "./Loading.css"; 

const LoadingData = () => (
    <>
       <div className="loading-data">
            <Spin/>
       </div>
    </>
)

export default LoadingData;