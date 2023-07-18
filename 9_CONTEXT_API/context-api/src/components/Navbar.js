//Config
import React from 'react'
import { NavLink } from 'react-router-dom'

//CSS
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/About">About</NavLink>
        <NavLink to = "/Products">Products</NavLink>
    </nav>
  )
}

export default Navbar