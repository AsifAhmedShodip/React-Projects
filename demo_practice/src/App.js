import React,{useState} from 'react';
import './App.css';
import Table from './Table'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  const [characters,setCharecters] = useState([])

  const handleSubmit = (newCharecter) => {
    setCharecters([...characters,newCharecter])
  }

  const deleteHandle = (index) =>{
    const array1 = characters
    var filterd = array1.filter((array1,i) =>{
      return index != i
    })

    setCharecters(filterd)
  }

  return (
    <div className="app">
      <div className='navbar'>
        <ul className='list'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Rooms</a>
          </li>
          <li className='contact'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>

      <br></br>
      <br></br>
      <h1>React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>
      <Table charecterData = {characters} deleteHandle={deleteHandle}></Table>
      <br></br>
      <h3>Add New</h3>
      <Form submitHandle={handleSubmit}/>*/
    </div>
  );
}

export default App;
