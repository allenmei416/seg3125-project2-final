// Confirmation.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

// Mapping of program values to program names
const programNames = {
  1: 'Advanced Hockey Skills',
  2: 'Beginner Hockey Camp',
  3: 'Intermediate Hockey Training',
  4: 'Elite Hockey Program',
  5: 'Basic Skating Skills',
  6: 'Hockey Fun Camp',
  7: 'Goalie Training Camp',
  8: 'Hockey Conditioning',
  9: 'Summer Hockey School',
  10: 'Hockey Skills Clinic',
  11: 'Power Skating Program',
  12: 'Off-Season Conditioning',
  13: 'Peewee Hockey Training',
  14: 'Hockey Development Camp',
  15: 'Defenseman Training Program',
  16: 'Forward Skills Training',
  17: 'Shooting and Scoring Clinic',
  18: 'Speed and Agility Camp',
  19: 'Stickhandling Skills Camp',
  20: 'Summer Hockey Development'
};

const Confirmation = () => {
  const location = useLocation();
  const { parentInfo, children } = location.state;

  return (
    <div className="confirmation-container">
      <h2>Registration Confirmation</h2>
      <p className="confirmation-message">Thank you for registering! Here are the details of your registration:</p>
      <div>
        <h3>Parent’s Information</h3>
        <p><strong>Full Name:</strong> {parentInfo.fullName}</p>
        <p><strong>Phone Number:</strong> {parentInfo.phoneNumber}</p>
        <p><strong>Email:</strong> {parentInfo.email}</p>
      </div>
      {children.map((child, index) => (
        <div key={index}>
          <h3 class="top-space">Child {index + 1} Information</h3>
          <p><strong>Full Name:</strong> {child.fullName}</p>
          <p><strong>Birthday:</strong> {child.birthday ? child.birthday.toLocaleDateString() : 'N/A'}</p>
          <p><strong>Program:</strong> {programNames[child.program]}</p>
          <p><strong>Schedule:</strong></p>
          <ul>
            {Object.keys(child.schedule).map((day) => (
              <li key={day}>
                {day}: {child.schedule[day].attending ? 'Attending' : 'Not Attending'}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Confirmation;
