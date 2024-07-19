import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const maxChildren = 5;
  const [parentInfo, setParentInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });
  const [children, setChildren] = useState([
    {
      fullName: '',
      birthday: null,
      program: '',
      schedule: {
        Monday: { attending: false },
        Tuesday: { attending: false },
        Wednesday: { attending: false },
        Thursday: { attending: false },
        Friday: { attending: false },
      }
    }
  ]);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMsg = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = 'Invalid email address';
      }
    } else if (name === 'phoneNumber') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value)) {
        errorMsg = 'Phone number must be 10 digits';
      }
    } else if (name === 'fullName' && value.trim() === '') {
      errorMsg = 'Full name is required';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setParentInfo({ ...parentInfo, [name]: value });
  };

  const handleChildChange = (index, e) => {
    const { name, value } = e.target;
    const updatedChildren = [...children];
    updatedChildren[index] = { ...updatedChildren[index], [name]: value };
    setChildren(updatedChildren);
  };

  const handleBirthdayChange = (index, date) => {
    const updatedChildren = [...children];
    updatedChildren[index].birthday = date;
    setChildren(updatedChildren);
  };

  const handleScheduleChange = (index, day) => {
    const updatedChildren = [...children];
    updatedChildren[index].schedule[day].attending = !updatedChildren[index].schedule[day].attending;
    setChildren(updatedChildren);
  };

  const addAnotherChild = () => {
    if (children.length < maxChildren) {
      setChildren([...children, {
        fullName: '',
        birthday: null,
        program: '',
        schedule: {
          Monday: { attending: false },
          Tuesday: { attending: false },
          Wednesday: { attending: false },
          Thursday: { attending: false },
          Friday: { attending: false },
        }
      }]);
    }
  };

  const removeChild = (index) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    setChildren(updatedChildren);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or submission logic here
    // For simplicity, just navigate to confirmation page
    navigate('/confirmation', { state: { parentInfo, children } });
  };

  return (
    <div className="register-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <h3>Parent’s Information</h3>
        <div className="form-group">
          <label>
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            value={parentInfo.fullName}
            onChange={handleParentChange}
            placeholder="Enter full name"
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label>
            Phone Number*
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={parentInfo.phoneNumber}
            onChange={handleParentChange}
            placeholder="Enter phone number"
            required
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <label>
            Email*
         </label>
          <input
            type="email"
            name="email"
            value={parentInfo.email}
            onChange={handleParentChange}
            placeholder="Enter email"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        {children.map((child, index) => (
          <div key={index} className="child-info">
            <h3>Child {index + 1} Information</h3>
            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={child.fullName}
                onChange={(e) => handleChildChange(index, e)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Birthday*</label>
              <DatePicker
                selected={child.birthday}
                onChange={(date) => handleBirthdayChange(index, date)}
                placeholderText="Select a date"
                dateFormat="MM/dd/yyyy"
                required
              />
            </div>
            <div className="form-group">
              <label>Camp Program*</label>
              <select
                name="program"
                value={child.program}
                onChange={(e) => handleChildChange(index, e)}
                required
              >
                <option value="">Select a Program</option>
                <option value="1">Advanced Hockey Skills</option>
                <option value="2">Beginner Hockey Camp</option>
                <option value="3">Intermediate Hockey Training</option>
                <option value="4">Elite Hockey Program</option>
                <option value="5">Basic Skating Skills</option>
                <option value="6">Hockey Fun Camp</option>
                <option value="7">Goalie Training Camp</option>
                <option value="8">Hockey Conditioning</option>
                <option value="9">Summer Hockey School</option>
                <option value="10">Hockey Skills Clinic</option>
                <option value="11">Power Skating Program</option>
                <option value="12">Off-Season Conditioning</option>
                <option value="13">Peewee Hockey Training</option>
                <option value="14">Hockey Development Camp</option>
                <option value="15">Defenseman Training Program</option>
                <option value="16">Forward Skills Training</option>
                <option value="17">Shooting and Scoring Clinic</option>
                <option value="18">Speed and Agility Camp</option>
                <option value="19">Stickhandling Skills Camp</option>
                <option value="20">Summer Hockey Development</option>
              </select>
            </div>
            <p><br></br>Check which days the child will be attending</p>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Attending</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(child.schedule).map((day) => {
                  const activities = {
                    Monday: 'Off Ice Conditioning Training and Skill',
                    Tuesday: 'On Ice Drills',
                    Wednesday: 'Field Trip Day',
                    Thursday: 'On Ice Drills',
                    Friday: 'Scrimmage All Day'
                  };
                  return (
                    <tr key={day}>
                      <td>{day}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={child.schedule[day].attending}
                          onChange={() => handleScheduleChange(index, day)}
                        />
                      </td>
                      <td>{activities[day]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeChild(index)}
                className="remove-child-button"
                title="Click to remove this child from registration"
              >
                Remove Child
              </button>
            )}
          </div>
        ))}
        {children.length < maxChildren && (
          <button
            type="button"
            onClick={addAnotherChild}
            className="add-child-button"
            title="Click to add another child's information for registration"
          >
            Add Another Child
          </button>
        )}
        <button type="submit" className="submit-button">Register</button>
        <Tooltip id="fullNameTip" place="top" effect="solid">
          Enter your full legal name.
        </Tooltip>
        <Tooltip id="phoneTip" place="top" effect="solid">
          Enter a 10-digit phone number.
        </Tooltip>
        <Tooltip id="emailTip" place="top" effect="solid">
          Enter a valid email address.
        </Tooltip>
      </form>
    </div>
  );
};

export default Register;
