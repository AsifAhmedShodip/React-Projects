import React, { Component,useState, useEffect, useContext } from 'react'
import Word from './Word'
import fire from './fire'
import MyContext from '../App'


function MainContent() {
    const [variable, setVariable] = useState(Math.floor((Math.random() * 100) + 1))
    const [userId, setUserId] = useState(null)
    const [word,setWord] = useState([])

    useEffect(() =>{
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUserId(user.uid);
                console.log(variable)
                fire.database().ref('/800_essential/' + variable).on('value', querySnapShot => {
                    let data = querySnapShot.val() ? querySnapShot.val() : {};
                    setWord(data)
                    console.log('wordssss', data)
                });

                fire.database().ref('/' + user.uid + '/seen/800_essential/'+variable).set({
                    id: variable
                });
            } else {
                setUserId(null);
                localStorage.removeItem('user');
            }
        });

    },[variable])

    const clickHandler = () => {
        var x = Math.floor((Math.random() * 1000) + 1);
        if (x > 799) {
            x = x - 799
        }
        console.log('clickHandle',x)
        setVariable(x)
        
    }
    
    return (
        <div id="page-content-wrapper">
            <div className="jumbotron">
                {word.word}<br></br>
                {word.meaning}
            </div>
            <button type="button" class="btn btn-primary" onClick={clickHandler}>NEXT</button>
        </div>
    )
}

export default MainContent