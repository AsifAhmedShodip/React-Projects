import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'
import HooksArray from './component/HooksArray'
import ReducerCode from './component/ReducerCode'
import DataFetching from './component/DataFetching'

function App() {
  return (
    <div className="App">
      <DataFetching></DataFetching>
    </div>
  );
}

export default App;
