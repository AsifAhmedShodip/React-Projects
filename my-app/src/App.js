import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './component/Subscribe'
import Counter from  './component/Counter'
import FunctionClick from './component/FunctionClick'
import ParentComponent from './component/ParentComponent'
import PersonList from './component/PersonList'
import RefDemo from './component/RefDemo'

function App() {
  return (
    <div className="App">
      <RefDemo/>
    </div>
  );
}

export default App;
