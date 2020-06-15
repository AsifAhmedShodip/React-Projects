import React from 'react'
import logo from '../images/logo.png'
export default function Nav() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} />
                </div>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Recipe</a>
                    </li>
                    <button className='btn signup'>Sign Up</button>
                </ul>
            </nav>
        </header>
    )
}
