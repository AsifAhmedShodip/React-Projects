import React, { Component } from 'react'

class RefDemo extends Component {

    constructor(props) {
        super(props)
        this.inputR = React.createRef()
    }

    componentDidMount(){
        this.inputR.current.focus()
    }

    clickHandler = () => {
        alert(this.inputR.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputR} /> 
                <button onClick = {this.clickHandler} >CLICK</button>
            </div>
        )
    }
}

export default RefDemo
