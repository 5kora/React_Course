// 2 - Links com react router
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            {/* <Link to="/">Inicio</Link>
            <Link to="/About">About</Link> */}
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Navbar