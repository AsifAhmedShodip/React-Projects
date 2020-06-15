import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() => props.greetHandler('IQBAL2.0')}> Greet Parents</button>
        </div>
    )
}

export default ChildComponent
