import React , {useState} from 'react'

function Counter() {

    const initialCount = 0
    const [count,setCount] = useState(initialCount)

    return (
        <div>
            Count {count}
            <button onClick = {() => setCount(a => a+1)} >Increment</button>
        </div>
    )
}

export default Counter
