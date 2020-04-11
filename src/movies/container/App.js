import React from "react";
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import InputSearch from "../../components/InputSeacrh";
import ListMovies from "../../components/ListMovies";
import {getDataMovie} from "../action/index";
import { Spin } from 'antd';
import { createStructuredSelector } from 'reselect';
import {listMovieSelector, isLoadingSelector} from "../reselect/reselect";
import PropTypes from 'prop-types';

class App extends React.Component {

    render() {
        if(this.props.isLoading){
            return (<Spin />)
        }
        return (

            <>
                <Row style={{marginTop: "2em"}}>
                    <Col span={12} offset={6}>
                        <InputSearch Click={this.props.onClick} />
                        <ListMovies movies={this.props.movies} />
                    </Col>
                </Row>
            </>
        )
    }
    
}
const mapStateToProps = createStructuredSelector({
    isLoading: isLoadingSelector,
    movies: listMovieSelector
});

/*
const mapStateToProps = state => {  

    //console.log(state.movieReducer.dataMovie);
    return {
        isLoading: state.movieReducer.loading,
        movies: state.movieReducer.dataMovie
    }
}
*/

const mapDispatchtoProps = (dispatch) => {

    return {
        onClick: (nameMovie) => dispatch(getDataMovie(nameMovie))
    }
}

// Default Props
App.defaultProps = {
    isLoading: false,
    movies: []
}

// Props var type
App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            page: PropTypes.number,
            total_results: PropTypes.number,
            results: PropTypes.arrayOf(
                PropTypes.shape({
                    popularity: PropTypes.number,
                    title: PropTypes.string,
                    overview: PropTypes.string
                })
            )
        })
    ).isRequired
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);