import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Sign from './pages/Sign';
import Services from './pages/Services'
import { useEffect } from 'react'
import Service from './pages/Service'
import { toast } from 'react-toastify';
import usersActions from './redux/actions/usersActions'
import { connect } from 'react-redux'
import AdminPanel from './components/AdminPanel';

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
        <Route path="/" element={<Home/> } />
        <Route path="/services/:id" element={<Service/> } />
        <Route path="/services" element={<Services />} />
<<<<<<< HEAD
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/sign" element={<Sign />} />
=======
        <Route path="/sign" element={<Sign /> } />
>>>>>>> 4f7d38cd1f907d802423bbd65b9dbfff8e2df61e
      </Routes>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  rdxAuth: usersActions.isAuth,
  rdxLogin: usersActions.signInUser
}

export default connect(null, mapDispatchToProps)(App);
