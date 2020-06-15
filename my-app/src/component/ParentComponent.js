import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(){
        super()

        this.state = {
            parentName: 'IQBAL'
        }
    }
    

    greetParents(name){
        alert('Hello ' + name)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParents}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
