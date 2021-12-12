import React from 'react';
import '../css/contact.css';
import '../css/HeroSection.css';
import { Button } from '../elements/Button.js';
import Footer from '../elements/Footer';
import Navbar from '../elements/Navbar';

function Contact() {
  return (
    <>
    <Navbar />
    <div className='hero-container' style={{ 
      background: `url('/images/img-5.jpg') center center/cover no-repeat` 
    }}>
        <h1>CONTACT US</h1>
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
    <div class="container-contact">
        <div class="content-contact">
            <div class="left-side">
                <div class="address details">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="topic font">Address</div>
                    <div class="text-one font">605 P. Rodriguez Street Poblacion,</div>
                    <div class="text-two font">Lapu-Lapu City Cebu, 6015</div>
                </div>
                <div class="phone details">
                    <i class="fas fa-phone-alt"></i>
                    <div class="topic font">Phone</div>
                    <div class="text-one font">Tel: 412 - 2165</div>
                </div>
                <div class="email details">
                    <i class="fas fa-envelope"></i>
                    <div class="topic font">Email</div>
                    <div class="text-one font">electroworxservices@gmail.com</div>
                </div>
            </div>
            <div class="right-side">
                <div class="topic-text font">Inquiries</div>
                <p class="font">For any inquiries, questions or commendations, please the call number provided or fill out the following form</p>
                <form action="#">
                    <div class="input-box">
                        <input class="font" type="text" placeholder="Enter your name"/>
                    </div>
                    <div class="input-box">
                        <input class="font" type="text" placeholder="Enter your contact number"/>
                    </div>
                    <div class="input-box">
                        <input class="font" type="text" placeholder="Enter your email"/>
                    </div>
                    <div class="input-box">
                        <input class="font" type="text" placeholder="Enter your subject"/>
                    </div>
                    <div class="input-box message-box">
                        <input class="font" type="text" placeholder="Enter your message"/>
                    </div>
                    <div class="button">
                        <input class="font" type="button" value="Send Now"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;