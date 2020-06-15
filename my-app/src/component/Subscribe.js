import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcom TO Our World'
        }

        //this.changeMessage = this.changeMessage.bind(this)
    }

    /*changeMessage() {
        this.setState({
            message: 'Thank You'
        })
    }*/

    changeMessage = () => {
        this.setState({
            message: 'Thank You'
        })
    }

    render() {
        return(
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={this.changeMessage} > Subscribe </button>
            </div>
            
        )
    }
}

export default Message