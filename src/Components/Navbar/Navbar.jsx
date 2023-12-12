import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <div className="container">
                <h3>Logo</h3>
                <div className='links-container'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar