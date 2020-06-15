import React from 'react'

function Person({per}) {
    return (
        <div>
            <h1>I am {per.name}. I am {per.age} years old.</h1>
        </div>
    )
}

export default Person
