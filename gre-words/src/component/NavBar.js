import React, { Component } from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <Link to = "/" className="bg-light"> GRE WORDS </Link></div>
                <div className="list-group list-group-flush">
                    <Link to = '/login' className="list-group-item list-group-item-action bg-light">Profile</Link>
                    <Link to = '/login' className="list-group-item list-group-item-action bg-light">Memorized</Link>
                    <Link to = '/login' className="list-group-item list-group-item-action bg-light">Flagged</Link>
                    <Link to = '/login' className="list-group-item list-group-item-action bg-light">Settigs</Link>
                </div>
            </div>
        )
    }
}

export default NavBar
