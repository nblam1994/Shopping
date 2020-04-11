import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'antd';
import {listWeatherSelector, isLoadingSelector} from "../reselect/reselect";
import {getDataWeather} from "../action/action";
import InputSearch from "../../components/InputSeacrh";
import ListWeather from "../../components/ListWeather";
import { Spin } from 'antd';
import PropTypes from 'prop-types';


class App extends React.Component {
    render() {
        console.log(this.props.weather)
        if(this.props.isLoading){
            return (<Spin />)
        }
        return (
            <>
                <Row style={{marginTop: "2em"}}>
                    <Col span={12} offset={6}>
                        <InputSearch Click={this.props.onClick} />
                        <ListWeather weather={this.props.weather} />
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isLoading: isLoadingSelector,
    weather: listWeatherSelector
});


// const mapStateToProps = state => {  

//     return {
//         isLoading: state.movieReducer.loading,
//         movies: state.movieReducer.dataMovie
//     }
//}


const mapDispatchtoProps = (dispatch) => {

    return {
        onClick: (nameCity) => dispatch(getDataWeather(nameCity))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);

// export default App; 