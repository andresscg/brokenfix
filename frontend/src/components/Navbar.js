import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
  console.log(props)
  return (
    <div className="nav-container">
      <Link to='/'>
          <img src="./assets/logo.png" alt="logo" className="nav-logo" />
      </Link>
      <div className="nav-menu">
          <Link to="/" className='navbar-links'>
            Home
          </Link>
          <Link to="/services" className='navbar-links'>
            Services
          </Link>
          <Link to='/contact' className='navbar-links'>
            Contact Us
          </Link>
      </div>
      <div className='cont-log-sign'>
        <Link to="/sign" className='navbar-links'>
          Sign Up
        </Link>
        <Link to="/sign" className='navbar-links'>
          Log In
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        user: state.users.user
    }
}


export default connect(mapStateToProps)(Navbar)
