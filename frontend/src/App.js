import React, { useEffect } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from "./components/Footer"
import Sign from './pages/Sign';
import Services from './pages/Services'
import Service from './pages/Service'
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';
import {toast} from "react-toastify"
import {ToastContainer} from 'react-toastify'

const App = (props) => {

  const { authUser } = props
  useEffect(()=>{
    if(localStorage.getItem('token')){
        authUser(localStorage.getItem('token'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/services/:id" element={<Service/> } />
        <Route path="/services" element={<Services />} />
        <Route path="/sign" element={<Sign /> } />
      </Routes>
      <Footer/>
      <ToastContainer
        position="bottom-rigth"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
      />
    </BrowserRouter>
   );
  }

const mapStateToProps = (state) => {
  return{
      token: state.users.token
  }
}
const mapDispatchToProps = {
  authUser: usersActions.authUser
}
export default connect(mapStateToProps, mapDispatchToProps)(App)