import React from 'react';
import '../css/home.css';
import { Button } from '../elements/Button.js';
import Footer from '../elements/Footer';
import Navbar from '../elements/Navbar';

function Home() {
  return (
    <>
      <div class="backgroundHome">
        <Navbar />
        <div class="main-home">
          <div class="container-homePage">
            <div class="r1-c1 bgHome">
              <div className='elecContain'>
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
            </div>
            <div class="r3-c1">
              <img className='homeImages' alt="pic1" src="/images/1AC.jpg" />
            </div>
            <div class="r3-c2">
              <img className='homeImages' alt="pic2" src="/images/Picture8.png" />
            </div>
            <div class="r1-c3">
              <img className='homeImages' alt="pic3" src="/images/2CCTV.jpg" />
            </div>
            <div class="r1-c4">
              <img className='homeImages' alt="pic4" src="/images/Picture10.png" />
            </div>
            <div class="r2-c3">
              <img className='homeImages' alt="pic5" src="/images/Systems.png" />
            </div>
            <div class="r2-c4">
              <img className='homeImages' alt="pic6" src="/images/8SC.jpg" />
            </div>
            <div class="r3-c4">
              <img className='homeImages' alt="pic7" src="/images/Picture6.png" />
            </div>
          </div>
        </div>
      </div>
        
      <Footer />
    </>
      
  );
}

export default Home;
