import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Sign from './pages/Sign';
import Services from './pages/Services'
import Service from './pages/Service'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/services/:id" element={<Service/> } />
        <Route path="/services" element={<Services />} />
        <Route path="/sign" element={<Sign /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
