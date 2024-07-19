import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import hockey_camp from '../images/hockey-camp1.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import facebook from '../images/facebook.png';

const Home = ({ language }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  // JSON data for different languages
  const textContent = language === 'en' ? require('../en.json') : require('../fr.json');

  return (
    <main className="main-content" lang={language}>
      <section className="info-column">
        <h1>{textContent.home.title}</h1>
        <h2>TML Hockey Camp</h2>
        <h3>{textContent.home.description}</h3>
        <button className="get-started-btn" onClick={handleGetStarted}>
          {textContent.home.getStarted}
        </button>
        <p className="top-space">
          {textContent.home.content}
        </p>
        <div className="highlight-box" aria-live="polite">
          <p>{textContent.home.highlight}</p>
          <p className="price">{textContent.home.price}</p>
        </div>
      </section>
      <section className="image-column">
        <img src={hockey_camp} className="hockey_camp_pic" alt="Hockey Camp" />
        <nav aria-label="Social Media Links" className="social-icons">
          <a href="https://instagram.com" aria-label="Visit our Instagram page">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com" aria-label="Visit our Twitter page">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://youtube.com" aria-label="Visit our YouTube channel">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="https://facebook.com" aria-label="Visit our Facebook page">
            <img src={facebook} alt="Facebook" />
          </a>
        </nav>
      </section>
    </main>
  );
};

export default Home;
