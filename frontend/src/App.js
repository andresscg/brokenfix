import './App.css';
import {BrowserRouter, Routes, Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroHome from './components/Hero';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroHome/>
    </BrowserRouter>
  );
}

export default App;
