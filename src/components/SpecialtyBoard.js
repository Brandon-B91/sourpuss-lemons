import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const specialtyBoard = {
  minHeight: '20rem',
  background: 'var(--siteYellow)',
  border: '4px solid var(--sitePink)',
  borderRadius: '.5rem',
  padding: '1rem',
};

const h3 = {
  fontSize: 'var(--fontMd)',
  textAlign: 'center',
  color: 'var(--black)',
  lineHeight: '1',
  textTransform: 'capitalize'
}

const menuH2 = {
  fontSize: 'var(--fontMd',
  color: 'var(--sitePink)',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '2rem'
};

const card = {
  minHeight: '15rem',
  background: 'var(--sitePink)',
  color: 'var(--black)',
  position: 'relative',
  border: ' 2px solid var(--siteYellow)',
  boxShadow: '0 0 8px black',
};

const cardTitle = {
  position: 'absolute',
  top: '-1.75rem',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '2px solid var(--siteYellow)',
  padding: '.5rem',
  borderRadius: '.5rem',
  background: 'var(--sitePink)',
  boxShadow: '0 0 8px black',
  width: '80%',
  textAlign: 'center',
  fontSize: 'var(--fontXs)',
  color: 'var(--siteYellow)',
  textTransform: 'uppercase',
};

const cardText = {
  textAlign: 'center',
  color: 'var(--siteYellow)',
  textTransform: 'uppercase',
  marginTop: '1rem',
};

const cardImg = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '-3rem',
  padding: '.5rem',
  background: 'var(--sitePink)',
  border: '2px solid var(--siteYellow)',
  borderRadius: '.25rem',
  boxShadow: '0 0 8px black',
}

const SpecialtyBoard = () => {
  return (
    <>
      <p style={h3}>Check out our specialty drinks and favorites, with new drinks coming all the time!</p>
      <div className='mb-5' style={specialtyBoard}>
        <h2 style={menuH2}> Specialty Menu </h2>
        <div className='row mb-5'>
          <div className='col-md-4'>
            <div className='card' style={card}>
              <div className='card-body'>
                <div className='card-title' style={cardTitle}>
                  Ocean Wave
                </div>
                <p className='card-text' style={cardText}>
                  Strawberry, Peach & Coconut flavored lemonade with
                  starburst candy
                </p>
              </div>
              <div className="card-bottom">
                <StaticImage
                  src='../images/ocean-wave-img.png'
                  alt="ocean wave"
                  width={100}
                  height={100}
                  style={cardImg}
                />
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className='card' style={card}>
              <div className='card-body'>
                <div className='card-title' style={cardTitle}>
                  Pink Starburst
                </div>
                <p className='card-text' style={cardText}>
                  Strawberry, Peach & Coconut flavored lemonade with
                  starburst candy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialtyBoard;
