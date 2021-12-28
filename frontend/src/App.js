import './App.css';
<<<<<<< HEAD
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
>>>>>>> a7b77a2d32bb74a819ef768ecf63f15ca51a07de
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Sign from './pages/Sign';
import Services from './pages/Services'
import { useEffect } from 'react'
import Service from './pages/Service'
import { toast } from 'react-toastify';
import userActions from './redux/actions/usersActions'
import { connect } from 'react-redux'
function App({ rdxAuth, rdxLogin }) {
  useEffect(() => {
    async function fetchData() {
      const user = await rdxAuth();
      user.error && toast(user.error)
      user.response && rdxLogin({ email: user.response.email, password: user.response.password, google: user.response.google })
    }
    localStorage.getItem('token') && fetchData();
  }, [rdxAuth, rdxLogin])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  rdxAuth: userActions.isAuth,
  rdxLogin: userActions.signInUser
}

export default connect(null, mapDispatchToProps)(App);
