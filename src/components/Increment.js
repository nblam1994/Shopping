import React from "react"

class Increment extends React.Component {


    render() {

        return (

            <>
                <button onClick={() => {this.props.increment(this.props.count)}}>+</button>
            </>
        )
    }
}


export default Increment;