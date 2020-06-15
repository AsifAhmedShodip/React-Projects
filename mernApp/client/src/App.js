import React,{useState,useEffect} from 'react';
import './App.css';
import {Container,Button} from 'react-bootstrap'
import Form from'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
  const [title,setTitle] = useState('')
  const [body, setBody] = useState('')
  const [posts, setPosts] = useState(null)


  if(posts !== null){
    console.log(JSON.parse(posts)[0])
  }

  useEffect(() =>{
    getBlogPost()
    
  },[posts])

const getBlogPost = () =>{
    axios.get('/api')
      .then((res) =>{
        const data = res.data
        setPosts(JSON.stringify(data))
      })
      .catch((e) => console.log(e))
  }

  const submitForm = (event) =>{
    event.preventDefault()

    const payload = {
      title,
      body
    }

    axios({
      url : '/api/save',
      method: 'POST',
      data: payload
    })
      .then(()=>{
        console.log('SeNd')
        setTitle('')
        setBody('')
        getBlogPost()
      })
      .catch((e)=>{
        console.log(e)
      })
  }

  return (
    <Container style={{padding:200}}>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Enter Title</Form.Label>
          <Form.Control type="input" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Body</Form.Label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            name='body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Container>
  );
}

export default App;
