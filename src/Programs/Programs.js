// src/Programs.js
import React, { useState } from 'react';
import './Programs.css';

const programsData = [
  {
    id: 1,
    title: 'Advanced Hockey Skills',
    ageGroup: '5-10',
    skillLevel: 'Advanced',
    girlsOnly: 'No',
    duration: '8 weeks',
  },
  {
    id: 2,
    title: 'Beginner Hockey Camp',
    ageGroup: '11-15',
    skillLevel: 'Beginner',
    girlsOnly: 'Yes',
    duration: '4 weeks',
  },
  {
    id: 3,
    title: 'Intermediate Hockey Training',
    ageGroup: '5-10',
    skillLevel: 'Intermediate',
    girlsOnly: 'No',
    duration: '6 weeks',
  },
  {
    id: 4,
    title: 'Elite Hockey Program',
    ageGroup: '11-15',
    skillLevel: 'Advanced',
    girlsOnly: 'No',
    duration: '8 weeks',
  },
  {
    id: 5,
    title: 'Basic Skating Skills',
    ageGroup: '5-10',
    skillLevel: 'Beginner',
    girlsOnly: 'Yes',
    duration: '2 weeks',
  },
  {
    id: 6,
    title: 'Hockey Fun Camp',
    ageGroup: '5-10',
    skillLevel: 'Beginner',
    girlsOnly: 'No',
    duration: '4 weeks',
  },
  {
    id: 7,
    title: 'Goalie Training Camp',
    ageGroup: '11-15',
    skillLevel: 'Intermediate',
    girlsOnly: 'Yes',
    duration: '6 weeks',
  },
  {
    id: 8,
    title: 'Hockey Conditioning',
    ageGroup: '11-15',
    skillLevel: 'Advanced',
    girlsOnly: 'No',
    duration: '8 weeks',
  },
  {
    id: 9,
    title: 'Summer Hockey School',
    ageGroup: '5-10',
    skillLevel: 'Beginner',
    girlsOnly: 'No',
    duration: '2 weeks',
  },
  {
    id: 10,
    title: 'Hockey Skills Clinic',
    ageGroup: '11-15',
    skillLevel: 'Intermediate',
    girlsOnly: 'Yes',
    duration: '4 weeks',
  },
  {
    id: 11,
    title: 'Power Skating Program',
    ageGroup: '5-10',
    skillLevel: 'Intermediate',
    girlsOnly: 'No',
    duration: '6 weeks',
  },
  {
    id: 12,
    title: 'Off-Season Conditioning',
    ageGroup: '11-15',
    skillLevel: 'Advanced',
    girlsOnly: 'No',
    duration: '8 weeks',
  },
  {
    id: 13,
    title: 'Peewee Hockey Training',
    ageGroup: '5-10',
    skillLevel: 'Beginner',
    girlsOnly: 'Yes',
    duration: '2 weeks',
  },
  {
    id: 14,
    title: 'Hockey Development Camp',
    ageGroup: '11-15',
    skillLevel: 'Intermediate',
    girlsOnly: 'No',
    duration: '4 weeks',
  },
  {
    id: 15,
    title: 'Defenseman Training Program',
    ageGroup: '11-15',
    skillLevel: 'Advanced',
    girlsOnly: 'Yes',
    duration: '6 weeks',
  },
  {
    id: 16,
    title: 'Forward Skills Training',
    ageGroup: '5-10',
    skillLevel: 'Beginner',
    girlsOnly: 'No',
    duration: '4 weeks',
  },
  {
    id: 17,
    title: 'Shooting and Scoring Clinic',
    ageGroup: '11-15',
    skillLevel: 'Intermediate',
    girlsOnly: 'Yes',
    duration: '2 weeks',
  },
  {
    id: 18,
    title: 'Speed and Agility Camp',
    ageGroup: '5-10',
    skillLevel: 'Advanced',
    girlsOnly: 'No',
    duration: '8 weeks',
  },
  {
    id: 19,
    title: 'Stickhandling Skills Camp',
    ageGroup: '11-15',
    skillLevel: 'Beginner',
    girlsOnly: 'Yes',
    duration: '4 weeks',
  },
  {
    id: 20,
    title: 'Summer Hockey Development',
    ageGroup: '5-10',
    skillLevel: 'Intermediate',
    girlsOnly: 'No',
    duration: '6 weeks',
  },
];

const Programs = () => {
  const [ageGroup, setAgeGroup] = useState([]);
  const [skillLevel, setSkillLevel] = useState([]);
  const [girlsOnly, setGirlsOnly] = useState([]);
  const [duration, setDuration] = useState([]);

  const handleCheckboxChange = (event, setter, values) => {
    const { value, checked } = event.target;
    if (checked) {
      setter([...values, value]);
    } else {
      setter(values.filter((v) => v !== value));
    }
  };

  const filteredPrograms = programsData.filter((program) => {
    return (
      (ageGroup.length === 0 || ageGroup.includes(program.ageGroup)) &&
      (skillLevel.length === 0 || skillLevel.includes(program.skillLevel)) &&
      (girlsOnly.length === 0 || girlsOnly.includes(program.girlsOnly)) &&
      (duration.length === 0 || duration.includes(program.duration))
    );
  });

  return (
    <div className="main-content">
      <div className="faceted-search">
        <h2>Programs</h2>
        <div className="facet">
          <label>Age Group</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="5-10"
              onChange={(e) => handleCheckboxChange(e, setAgeGroup, ageGroup)}
            />
            <span>5-10</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="11-15"
              onChange={(e) => handleCheckboxChange(e, setAgeGroup, ageGroup)}
            />
            <span>11-15</span>
          </div>
        </div>
        <div className="facet">
          <label>Skill Level</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="Beginner"
              onChange={(e) => handleCheckboxChange(e, setSkillLevel, skillLevel)}
            />
            <span>Beginner</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="Intermediate"
              onChange={(e) => handleCheckboxChange(e, setSkillLevel, skillLevel)}
            />
            <span>Intermediate</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="Advanced"
              onChange={(e) => handleCheckboxChange(e, setSkillLevel, skillLevel)}
            />
            <span>Advanced</span>
          </div>
        </div>
        <div className="facet">
          <label>Girls Only</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="Yes"
              onChange={(e) => handleCheckboxChange(e, setGirlsOnly, girlsOnly)}
            />
            <span>Yes</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="No"
              onChange={(e) => handleCheckboxChange(e, setGirlsOnly, girlsOnly)}
            />
            <span>No</span>
          </div>
        </div>
        <div className="facet">
          <label>Duration</label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="2 weeks"
              onChange={(e) => handleCheckboxChange(e, setDuration, duration)}
            />
            <span>2 weeks</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="4 weeks"
              onChange={(e) => handleCheckboxChange(e, setDuration, duration)}
            />
            <span>4 weeks</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="6 weeks"
              onChange={(e) => handleCheckboxChange(e, setDuration, duration)}
            />
            <span>6 weeks</span>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              value="8 weeks"
              onChange={(e) => handleCheckboxChange(e, setDuration, duration)}
            />
            <span>8 weeks</span>
          </div>
        </div>
      </div>
      <div className="program-cards">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="program-card">
            <h3>{program.title}</h3>
            <p>Age Group: {program.ageGroup}</p>
            <p>Skill Level: {program.skillLevel}</p>
            <p>Girls Only: {program.girlsOnly}</p>
            <p>Duration: {program.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
