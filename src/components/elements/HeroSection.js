import React from 'react';
// import './App.css';
import { Button } from '../elements/Button';
import '../css/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' style={{ 
      background: `url('/images/trye.jpg') center center/cover no-repeat` 
    }}>
      
      <h1>ELECTROWORX SERVICES</h1>
      <p>The power to do more</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          View Appointments <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
