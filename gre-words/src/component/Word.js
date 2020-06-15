import React from 'react'

export default function Word({w}) {
    return (
        <div>
            <h4>{w.word}</h4>
            <h6>{w.meaning}</h6>
        </div>
    )
}
