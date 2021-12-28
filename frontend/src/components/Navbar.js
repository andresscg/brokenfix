import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import usersActions from "../redux/actions/usersActions";

const Navbar = (props) => {

  console.log(props)
  // const {img} = props.img
  const logOutHandler = (e) => {
      e.preventDefault()
      props.logOut()
  }
  // const userImg = img
  // console.log(userImg)
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
      { !props.user ? 
        <div className='cont-log-sign'>
          <Link to="/sign" className='navbar-links'>
            Sign In
          </Link>
        </div>
        :
        <div>
          <div style={{
            padding: '.1rem', 
            backgroundColor: 'gray', 
            borderRadius: '50%'}
            }>
              <img src={props.img} className='img-user' alt="Profile user icon"/>
          </div>
          <button onClick={(e) => logOutHandler(e)}>Log Out</button>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        user: state.users.user,
        img:state.users.img
    }
}
const mapDispatchToProps = {
    logOut: usersActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
