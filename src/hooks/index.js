import React, {useState, useEffect} from "react";
import InputSearch from "../components/InputSeacrh";
import ListMovies from "../components/ListMovies"; 
import { Row, Col } from 'antd';
import {api} from "./api/movieApi";

const AppMovie = () => {
    // luu y: luon luon khai bao hooks state o tren dau function (tren moi lenh khac )
    // khai bao state va ham cap nhat lai state
    const [movies, setDataMovies] = useState([]);
    // this.state = {weather : [], isLOading: false}
    // setDataWeather gan giongs nhu this.setState
    const [isLoading, setIsLoading] = useState(false);
    
    const getDataMovies = async (name) => {
        // cap nhap state loading
        setIsLoading(true);

        const respone = await api.getDataMovierApi(name);
        if(respone.status === 200){
            const dataMovies = await respone.data.results;
            // cap nhat state
            setIsLoading(false);
            // cap nhat state movie
            setDataMovies(dataMovies);
        }
    }

    // su dung useEffect
    // tuong duong nhu componentDidMount cua class component - khi co tham so mang thu 2 la rong
    useEffect(() => {
        getDataMovies("ironman");
    }, [])

    return (
        <>
            <Row style={{marginTop: "2em"}}>
                <Col span={12} offset={6}>
                    <InputSearch Click={getDataMovies} />
                    <ListMovies 
                        movies={movies}
                        loading={isLoading}
                    />
                </Col>
            </Row>
        </>
    )
}


export default AppMovie; 