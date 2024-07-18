import React from 'react';
import './Coaches.css';
import coach1 from '../images/hockey_coach1.jpg';
import coach2 from '../images/hockey_coach2.jpg';
import coach3 from '../images/hockey_coach3.jpg';

const coachesData = [
  {
    id: 1,
    name: 'Coach John Thompson',
    title: 'Head Coach',
    bio: 'With over 15 years of coaching experience at the collegiate and professional levels, Coach John brings a wealth of knowledge and expertise to TML Hockey Camp.',
    email: 'john.thompson@example.com',
    image: coach1
  },
  {
    id: 2,
    name: 'Coach Catherine White',
    title: 'Assistant Coach',
    bio: 'Catherine White, a former NCAA Division I player, has transitioned her on-ice success into a flourishing coaching career.',
    email: 'catherine.white@example.com',
    image: coach3
  },
  {
    id: 3,
    name: 'Coach Tim Konel',
    title: 'Assistant Coach',
    bio: 'A former NHL All-Star, Tim Konel brings a wealth of professional experience and insights to TML Hockey Camp.',
    email: 'tim.konel@example.com',
    image: coach2
  }
];

const coachesDataFr = [
  {
    id: 1,
    name: 'Entraîneur Jean Thompson',
    title: 'Entraîneur principal',
    bio: 'Avec plus de 15 ans d\'expérience d\'entraînement au niveau collégial et professionnel, l\'entraîneur Jean apporte une richesse de connaissances et d\'expertise au Camp de Hockey TML.',
    email: 'jean.thompson@example.com',
    image: coach1
  },
  {
    id: 2,
    name: 'Entraîneur Catherine White',
    title: 'Entraîneur adjoint',
    bio: 'Catherine White, ancienne joueuse de la NCAA Division I, a transformé son succès sur la glace en une carrière d\'entraîneur florissante.',
    email: 'catherine.white@example.com',
    image: coach3
  },
  {
    id: 3,
    name: 'Entraîneur Tim Konel',
    title: 'Entraîneur adjoint',
    bio: 'Ancienne vedette de la LNH, Tim Konel apporte une richesse d\'expérience professionnelle et d\'idées au Camp de Hockey TML.',
    email: 'tim.konel@example.com',
    image: coach2
  }
];

const Coaches = ({ language }) => {
  // Determine which data to use based on the language prop
  const data = language === 'fr' ? coachesDataFr : coachesData;

  // Determine text content based on language prop
  const textContent = language === 'en' ? require('../en.json') : require('../fr.json');

  return (
    <div className="main-content column">
      <h2>{textContent.coaches.title}</h2>
      {data.map((coach) => (
        <div key={coach.id} className="coach-card">
          <img src={coach.image} alt={coach.name} className="coach-image" />
          <div className="coach-info">
            <h3>{coach.name}</h3>
            <h4>{coach.title}</h4> 
            <p>{coach.bio}</p>
            <p><a href={`mailto:${coach.email}`}>{coach.email}</a></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coaches;
