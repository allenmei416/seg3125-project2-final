import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Programs from './Programs/Programs';
import Coaches from './Coaches/Coaches';
import Contact from './Contact/Contact';
import Register from './Register/Register';
import './App.css';
import logo from './images/logo.png';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div>
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <ul className="menu">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/programs" activeClassName="active">Programs</NavLink></li>
            <li><NavLink to="/coaches" activeClassName="active">Coaches</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink to="/register" className="register-button">Register</NavLink></li>
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
