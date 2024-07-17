import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Register.css';

const Register = () => {
  const [parentInfo, setParentInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });
  const [children, setChildren] = useState([{
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

  const handleParentChange = (e) => {
    const { name, value } = e.target;
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parent Info:', parentInfo);
    console.log('Children:', children);
  };

  return (
    <div className="register-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <h3>Parent’s Information</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={parentInfo.fullName}
            onChange={handleParentChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={parentInfo.phoneNumber}
            onChange={handleParentChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={parentInfo.email}
            onChange={handleParentChange}
            placeholder="Enter email"
            required
          />
        </div>
        {children.map((child, index) => (
          <div key={index} className="child-info">
            <h3>Child’s Information</h3>
            <div className="form-group">
              <label>Full Name</label>
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
              <label>Birthday</label>
              <DatePicker
                selected={child.birthday}
                onChange={(date) => handleBirthdayChange(index, date)}
                placeholderText="Select a date"
                dateFormat="MM/dd/yyyy"
                required
              />
            </div>
            <div className="form-group">
              <label>Camp Program</label>
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
                <option value="0">Hockey Skills Clinic</option>
              </select>
            </div>
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
          </div>
        ))}
        <button type="button" onClick={addAnotherChild} className="add-child-button">Add Another Child</button>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
