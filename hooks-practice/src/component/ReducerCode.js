import React,{useState,useReducer} from 'react'

const initialState = {
    value: 0
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {value: state.value + 1}
        case 'decrement':
            return { value: state.value - 1 }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerCode() {

    const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            count {count.value}
            <div>
                <button onClick = {() => dispatch({type: 'increment'})}> Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}> Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}> Reset</button>
            </div>
        </div>
    )
}

export default ReducerCode
