import './App.css';
import { BrowserRouter, Routes, Router } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
