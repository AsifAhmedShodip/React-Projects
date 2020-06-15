import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Navbar from './components/Nav'
import Hero from './components/Hero'
import VerticalBar from './components/VerticalBar'
import Notification from './components/Notification'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <VerticalBar></VerticalBar>
      <Notification></Notification> 
    </>
  );
}

export default App;
