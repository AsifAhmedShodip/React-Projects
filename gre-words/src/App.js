import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import fire from './component/fire'

import Word from './component/Word'


import NavBar from './component/NavBar'
import MainContent from './component/MainContent'
import Login from './component/Login'

const MyContext = React.createContext();


/*fire.auth().signOut().then(function () {
  // Sign-out successful.
}).catch(function (error) {
  // An error happened.
});*/

function App() {

  const [userId, setUserId] = useState(null)

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        localStorage.setItem('user', user.uid);
      } else {
        setUserId(null);
        localStorage.removeItem('user');
      }
    });

  }, [])

  return (
    <Router>
      <div className="d-flex" id="wrapper">
        <NavBar></NavBar>
        <Route path="/" exact>
            <MainContent ></MainContent>
        </Route>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App

