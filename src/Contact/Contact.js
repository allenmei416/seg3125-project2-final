import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import map from '../images/map.png';

// JSON data for different languages
import en from '../en.json';
import fr from '../fr.json';

const Contact = ({ language }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  // Determine text content based on language prop
  const textContent = language === 'en' ? en : fr;

  return (
    <div className="main-content">
      <div className="left-column">
        <h2>{textContent.contact.title}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> {textContent.contact.address}</h3>
            <p>1234 Innovation Drive</p>
            <p>Metropolis, CA</p>
          </div>
          <div className="contact-item">
            <h3><FontAwesomeIcon icon={faEnvelope} /> {textContent.contact.email}</h3>
            <p><a href="mailto:TMLhockey@gmail.com">TMLhockey@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h3><FontAwesomeIcon icon={faPhone} /> {textContent.contact.phone}</h3>
            <p><a href="tel:111-111-1111">111-111-1111</a></p>
          </div>
        </div>
        <div className="map-container">
          <img src={map} alt="Map to TML Hockey Camp" />
        </div>
      </div>
      <div className="right-column">
        <div className="chat-container">
          <h3>{textContent.contact.liveChat}</h3>
          <p className="chat-description">{textContent.contact.liveChatDescription}</p>
          <div className="chat-box">
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="input-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={textContent.contact.typeMessage}
                required
              />
              <button type="submit">{textContent.contact.sendButton}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
