import React, { useEffect } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from "./components/Footer"
import Sign from './pages/Sign';
import Services from './pages/Services'
import { useEffect } from 'react'
import Service from './pages/Service'
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';

function App({ rdxAuth, rdxLogin }) {
  useEffect(() => {
    async function fetchData() {
      const user = await rdxAuth();
      user.error && toast(user.error)
      user.response && rdxLogin({ email: user.response.email, password: user.response.password, google: user.response.google })
    }
    localStorage.getItem('token') && fetchData();
  }, [rdxAuth, rdxLogin])

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
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Service />} />
        {!props.token && <Route path="/sign" element={<Sign />} />}

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
