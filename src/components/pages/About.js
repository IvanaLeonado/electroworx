import React from 'react';
import '../css/about.css';
import { Button } from '../elements/Button.js';
import Footer from '../elements/Footer';
import Navbar from '../elements/Navbar';


function About() {
  return (
    <>
    <Navbar />
<div className='hero-container' style={{ 
      background: `url('/images/about.jpg') center center/cover no-repeat` 
    }}>
      
      <h1>ABOUT</h1>
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

   <section className='mission'>
   <div className="neu">
       <div className='nemo'>
        <div className="morph">
            <h1 className='ism'>MISSION</h1>
           <br/> <p className='missioner'>To be a Competitive and Quality Value Provider in the industry as well as to provide latest Technology & Service through sustained research, development.</p>
        </div>
        </div>

       
        
        {/* <img src="images/testimonial.jpeg" className='morph' width='450px' alt='customer' /> */}
       
        


        <div className='nemo'>
        <div className="morph">
            <h1 className='ism'>VISION</h1>
           <br/> <p className='missioner'>We aim to build and sustain our customers trust, confidence and loyalty to develop closer working relationships with them.</p>
        </div>
        </div>

    </div>
   
    </section>
       
<section className='mv'>
    <div className='glass'>
        <h2 className='glasser'> ABOUT US
        </h2>
        <p className='glassest'>
            We stand out from other competitors in the market not only 
           with our various services but also because of several reasons
            like regular service checks, customer friendly staff 
            especially our after sales which is personally handled by 
            the owners.
<br/>
<br/>
We select appropriate places as where our 
equipment is to be installed rather than leaving that
 burden to the customers. We understand your needs and act 
 appropriately. We also advice the customers as to which process 
 of installation would be more cost effective, were at the same place 
 quality is one which we do not compromise. 
        </p>
    </div>
</section>

 
    <section className='team'>

    <h1>MEET THE TEAM</h1>
      

     <div className='container'>
         <div className='card'>
             <div className='content'>
                 <div className='imgBx'> 
                 <img src="images/team1.jpg" alt='customer' />
                 </div>
                 <div className='contentBx'>
                     <h3> Juan Luna Pedro <br />
                     <span>
                         Operations Manager
                     </span>
                     </h3>
                 </div>
                 </div>
                 
               
                 <ul className="sci">
                     <li >
                     
                     < a href="/">
                  <i class='fab fa-youtube' /></a>
                  <a href="/">
                  <i class='fab fa-linkedin' /></a>
                  <a href="/"> 
                  <i class='fab fa-facebook-f' /> </a>
                  <a href="/"> 
                  <i class='fab fa-instagram' /></a>

                     </li>
                 </ul>
                 </div>
               
        
                 <div className='container'>
         <div className='card'>
             <div className='content'>
                 <div className='imgBx'> 
                 <img src="images/team3.jpg" alt='customer' />
                 </div>
                 <div className='contentBx'>
                     <h3> Maria Clara<br />
                     <span>
                         Human Resources Manager
                     </span>
                     </h3>
                 </div>
                 </div>
                 
               
                 <ul className="sci">
                     <li >
                     
                  <a href="/">
                  <i class='fab fa-youtube' /></a>
                  <a href="/">
                  <i class='fab fa-linkedin' /></a>
                  <a href="/"> 
                  <i class='fab fa-facebook-f' /> </a>
                  <a href="/"> 
                  <i class='fab fa-instagram' /></a>

                     </li>
                 </ul>
                 </div>
                 </div>
        
                 <div className='container'>
         <div className='card'>
             <div className='content'>
                 <div className='imgBx'> 
                 <img src="images/team2.jpg" alt='customer' />
                 </div>
                 <div className='contentBx'>
                     <h3>Johner Doer <br />
                     <span>
                         Accounting Manager
                     </span>
                     </h3>
                 </div>
                 </div>
                 
               
                 <ul className="sci">
                     <li >
                     
                    < a href="/">
                  <i class='fab fa-youtube' /></a>
                  <a href="/">
                  <i class='fab fa-linkedin' /></a>
                  <a href="/"> 
                  <i class='fab fa-facebook-f' /> </a>
                  <a href="/"> 
                  <i class='fab fa-instagram' /></a>

                     </li>
                 </ul>
                 </div>
                 </div>
          </div>
</section>
      <Footer />
    </>
  );
}

export default About;
