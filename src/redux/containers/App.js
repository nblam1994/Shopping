import React from "react";
import { connect } from 'react-redux';
import Increment from "../../components/Increment";
import Decrement from "../../components/Decrement";
import Result from "../../components/Result";

import {DecrementNumber, IncrementNumber} from '../actions/index'

class App extends React.Component {
    render() {
        return (

            <>
                <Increment count={this.props.count} increment={this.props.increment} />
                <Decrement count={this.props.count} decrement={this.props.decrement} />
                <Result count={this.props.count} />
            </>
        )
    }
}

const mapStateToProps = state => ({
    count: state.Counter.count
})

const mapDispatchToProps = dispatch => ({
    increment: (val) => dispatch(IncrementNumber(val)),
    decrement: (val) => dispatch(DecrementNumber(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);