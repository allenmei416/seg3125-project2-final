import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import hockey_camp from '../images/hockey-camp1.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import facebook from '../images/facebook.png';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="main-content">
      <div className="info-column">
        <h1>SUMMER CAMP REGISTRATION OPEN</h1>
        <h2>TML Hockey Camp</h2>
        <h3>Join us for the 2024 Summer Season at Minto</h3>
        <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
        <p className="top-space">
          Get ready for an unforgettable summer at TML Hockey Camp, where young athletes can develop their skills, make lasting friendships, and experience the thrill of the game in a supportive and fun environment. Whether you're a beginner looking to learn the basics or an experienced player aiming to take your game to the next level, our camp offers top-notch coaching, state-of-the-art facilities, and a passion for hockey that's unmatched.
        </p>
        <div className="highlight-box">
          <p>Age 5-10 Advanced Camp for 9 weeks</p>
          <p className="price">$400 per child</p>
        </div>
      </div>
      <div className="image-column">
        <img src={hockey_camp} className="hockey_camp_pic" alt="Hockey Camp" />
        <div className="social-icons">
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={youtube} alt="YouTube" /></a>
          <a href="#"><img src={facebook} alt="Facebook" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
