import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Programs from './Programs/Programs';
import Coaches from './Coaches/Coaches';
import Contact from './Contact/Contact';
import Register from './Register/Register';
import Confirmation from './Confirmation/Confirmation';
import './App.css';
import logo from './images/logo.png';

const App = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div>
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <ul className="menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                {language === 'en' ? 'Home' : 'Accueil'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/coaches" className={({ isActive }) => (isActive ? 'active' : '')}>
                {language === 'en' ? 'Coaches' : 'Entraîneurs'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                {language === 'en' ? 'Contact' : 'Contact'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : '')}>
                {language === 'en' ? 'Programs' : 'Programmes'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="register-button">
                {language === 'en' ? 'Register' : 'S\'inscrire'}
              </NavLink>
            </li>
            {/* Language switch */}
            <li className="language-switch">
              <button onClick={toggleLanguage}>
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="/programs" element={<Programs language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="/coaches" element={<Coaches language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="/contact" element={<Contact language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="/register" element={<Register language={language} toggleLanguage={toggleLanguage} />} />
          <Route path="/confirmation" element={<Confirmation language={language} toggleLanguage={toggleLanguage} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
