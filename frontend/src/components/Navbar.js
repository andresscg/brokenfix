import React, { useState, useEffect } from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import usersActions from "../redux/actions/usersActions";


const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const openNavBar = () => setClick(!click);
  console.log(props)
  // const {img} = props.img
  const logOutHandler = (e) => {
      e.preventDefault()
      props.logOut()
  }
  // const openNavBar = (e) =>{
  //   var menu      = document.querySelector('fa fa-bars');
  //   var drawer    = document.querySelector("nav-menu");
  //   menu.addEventListener('click', function (e) {
  //     /*Abrir menu*/
  //     drawer.classList.toggle('show');
  // });
  // }
  // const userImg = img
  // console.log(userImg)
  return (
    <div className="nav-container">
      <Link to='/'>
          <img src="./assets/logo.png" alt="logo" className="nav-logo" />
      </Link>
      <div className={click ? "nav-menu show" : "nav-menu"}>
          <Link to="/" className='navbar-links'>
            Home
          </Link>
          <Link to="/services" className='navbar-links'>
            Services
          </Link>
          <Link to='/contact' className='navbar-links'>
            Contact Us
          </Link>
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
      <div className='btn-menu' onClick={openNavBar} >
     <i className={click ? "fas fa-times" : "fas fa-bars"}  />
      </div>
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
