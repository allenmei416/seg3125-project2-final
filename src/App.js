// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import Programs from './Programs/Programs';
import Coaches from './Coaches/Coaches';
import Contact from './Contact/Contact';
import Register from './Register/Register';
import './App.css';
import logo from './images/logo.png';

const App = () => {
  return (
    <Router >
      <div className="App">
        <nav className="navbar">
          <div>
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/coaches">Coaches</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/register" className="register-button">Register</Link></li>
          </ul>
        </nav>
        <p>hi</p>
        <Routes>
          <Route path="/tml-hockey-camp" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
