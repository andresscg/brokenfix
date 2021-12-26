import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-container">
      <img src="./assets/logo.svg" alt="logo" className="nav-logo" />
      <div className="nav-menu">
        <Link to="/">
          Home
        </Link>
        <Link to="/services">
          Services
        </Link>
        <Link to="/login">
          Log In
        </Link>
        <Link to="register">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Navbar
