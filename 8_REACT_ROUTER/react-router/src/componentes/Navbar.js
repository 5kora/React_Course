// 2 - Links com react router
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/About">About</Link>
        </nav>
    )
}

export default Navbar