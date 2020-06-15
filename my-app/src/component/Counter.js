import React, { Component } from 'react'


class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    console() {
        console.log(this.state.count)
    }
    
    increment(){
        this.setState(prevState => ({
            count: prevState.count+1
        }),this.console())
    }


    render() {
        return (
            <div>
                <h1>
                    Count - {this.state.count}
                </h1>
                <button onClick = {() => this.increment()}> Increment </button>
            </div>
        )
    }
}

export default Counter
