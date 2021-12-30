import React, { useState, useEffect } from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import usersActions from "../redux/actions/usersActions";


const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const openNavBar = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const logOutHandler = (e) => {
    e.preventDefault()
    props.logOut()
  }
  const menuClass = click ? "nav-menu show" : "nav-menu"
  return (
    <div className="nav-container">
      <Link to='/' >
        <img src="./assets/logo.png" alt="logo" className="nav-logo" />
      </Link>
      <div className={menuClass}>
        {(props.role === 'A' || props.role === 'B') && <Link to="/admin-panel" className='navbar-links'>
          Admin Panel
        </Link>}
        <Link to="/" className='navbar-links' onClick={closeMenu}>
          Home
        </Link>
        <Link to="/services" className='navbar-links' onClick={closeMenu}>
          Services
        </Link>
        <Link to='/howtouse' className='navbar-links' onClick={closeMenu}>
          How to use
        </Link>

        {!props.user ?
          <div className='cont-log-sign'>
            <Link to="/sign" className='navbar-links' onClick={closeMenu}>
              Sign In
            </Link>
          </div>
          :
          <div className="back-white">
            {/* <p className='nav-links'>Welcome, {props.user.name}</p> */}
            <img src={props.img} className='img-user' alt="Profile user icon" />
            <div className="button-logout">
              <p className='nav-links' onClick={(e) => logOutHandler(e)} >LogOut</p>
            </div>
          </div>
        }
      </div>

      <div className='btn-menu' onClick={openNavBar} >
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    user: state.users.user,
    img: state.users.img,
    role: state.users.role
  }
}
const mapDispatchToProps = {
  logOut: usersActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
