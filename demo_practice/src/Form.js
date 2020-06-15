import React,{useState} from 'react'

function Form(props) {
    const [name,setName] = useState('')
    const [job, setJob] = useState('')
    console.log(props)

    const submitClick = (event) =>{
        event.preventDefault()
        console.log("SUbmit")
        props.submitHandle({name,job})
    }
    
    return (
        <div className="col-md-6">
            <form onSubmit={submitClick}>
                <div className="form-group">
                    <label >Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label >Job</label>
                    <input value={job} onChange={e => setJob(e.target.value)} type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Job" />
                </div>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form
