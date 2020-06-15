import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fire from './fire';



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    const signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="col-md-6">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" onClick={login} class="btn btn-primary">Login</button>
                <button onClick={signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
            </form>

        </div>
    )
}

export default Login