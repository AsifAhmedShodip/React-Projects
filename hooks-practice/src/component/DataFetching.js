import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [word,setWord] = useState({})

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setWord(response.data)
        })
        .catch(e => 
            console.log(e))
    })

    return (
        <div>
            {word.title}
        </div>
    )
}

export default DataFetching
