import React from 'react'

function Table(props) {

    const TableHeader = () => {
        return(
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Job</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
        )
    }

    const TableBody = (prop) =>{
        console.log(prop)
        if(prop.Data.charecterData){
            const Rows = prop.Data.charecterData.map(
                (Row,index) => {
                    return(
                        <tr key = {index}>
                            <td>{Row.name} </td>
                            <td>{Row.job} </td>
                            <td>
                                <button onClick={() => prop.Data.deleteHandle(index)} className="btn btn-primary">Delete</button>
                            </td>
                        </tr>
                    )
                }
            )
            return (
                <tbody>
                    {Rows}
                </tbody>
            )
        }else{
            return null
        }
    }

    return (
            <table className='table table-striped'>
                <TableHeader></TableHeader>
                <TableBody Data={props}></TableBody>
            </table>
    )
}

export default Table
