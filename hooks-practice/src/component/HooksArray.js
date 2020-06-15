import React,{useState} from 'react'

function HooksArray() {
    const [items,setItems] = useState([])

    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    }

    const clearItem = () => {
        setItems([])
    }

    return (
        <div>
            <button onClick = {addItem}> Add an ITEM</button>
            <button onClick = {clearItem} >Clear</button>
            <ul>
                {items.map(
                    item => <li key={item.id}>{item.value}</li>
                )}
            </ul>
        </div>
    )
}

export default HooksArray
