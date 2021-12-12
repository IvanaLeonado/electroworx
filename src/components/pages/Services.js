import React from 'react';
import '../css/services.css';
import { Button } from '../elements/Button.js';
import Footer from '../elements/Footer';
import Navbar from '../elements/Navbar';


function Services() {
  return (
    <>
<Navbar />

<div className='hero-container' style={{ 
      background: `url('/images/services.jpg') center center/cover no-repeat` 
    }}>
      
      <h1>SERVICES</h1>
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



<section className='services'>
<div className='serv'>
  <div className='serve'>
    <div className='imgbx'>
    <img src="images/install.png" className='service' alt='service'/>
    </div>
    <div className='contserve'>
      <div className='contserving'>
        <h3 className='servcont'>Install</h3>
          <p className='contservative'> We design, deliver and engineer products at its best to accommodate your ever-growing needs.  We assist in creating a foundation that will allow you to alleviate your workflow and overcome work interruptions and downtime.
          </p>
       </div> 
      </div>
    </div>
 
 
  <div className='serve'>
    <div className='imgbx'>
    <img src="images/repair.png" className='service' alt='service'/>
    </div>
    <div className='contserve'>
      <div className='contserving'>
        <h3 className='servcont'>Maintain</h3>
          <p className='contservative'> We render our expertise on your existing and working products by performing comprehensive periodic maintenance to ensure its optimum performance as
              possible.
          </p>
        </div>
      </div>
    </div>
  


  
  <div className='serve'>
    <div className='imgbx'>
    <img src="images/maintain.png" className='service' alt='service'/>
    </div>
    <div className='contserve'>
      <div className='contserving'>
        <h3 className='servcont'>Repair</h3>
          <p className='contservative'>Our experienced industrial technicians can be deployed to client premises as the need arises to initiate troubleshooting and repair defective system components.
          </p>
        </div>
      </div>
      </div>
  

   <h5 className='titler'> WE CAN</h5> 



</div>
</section>





<section className='partners'>

   <div className='part'>
       <h2 className='ner'> PARTNERS </h2>
           <p className='partner'>
           We live by and for our customer satisfaction. 
           </p>
   </div>
   </section>



<section className='testimonials'>

<h1 className='titlest'>TESTIMONIALS</h1>
 <div className='testimonial'>
  <div className='testi'>
    <div className='teste'>
        <div className='imgBox'>
        <img src="images/test4.jpg" alt='customer'/>
        </div>
            <div className='contentest'>
                    <div className='boxtest'>
                      <h3 className='contest'>
                      "So effecient they fixed my aircon so fast!"
                      <br/> <span className='tester'>-customer x </span>
                      </h3>
                      </div>
              <p className='science'> leaky aircon </p>
              </div>
      </div>
      </div>
    


    <div className='testi'>
    <div className='teste'>
      <div className='imgBox'>
      <img src="images/test1.jpg" alt='customer'/>
      </div>
      <div className='contentest'>
        <div className='boxtest'>
          <h3 className='contest'>
            "Their service has always been the best"
             <br/> <span className='tester'>Customer Y </span>
          </h3>
          </div>
      <p className='science'> long time partner</p>
        </div>
      </div>
    </div>


    <div className='testi'>
    <div className='teste'>
      <div className='imgBox'>
      <img src="images/test2.jpg" alt='customer'/>
      </div>
      <div className='contentest'>
        <div className='boxtest'>
          <h3 className='contest'>
             "They were able to install the products effectively"
            <br/> <span className='tester'> - Customer Z  </span>
          </h3>
          </div>
      <p className='science'>cctv requirement</p>
        </div>
      </div>
    </div>

    <div className='testi'>
    <div className='teste'>
      <div className='imgBox'>
      <img src="images/testimonial.jpeg" alt='customer'/>
      </div>
      <div className='contentest'>
        <div className='boxtest'>
          <h3 className='contest'>
             "My PA system was repaired! I recommend!"
             <br/> <span className='tester'> -Customer G</span>
          </h3>
          </div>
      <p className='science'> pa system not funtioning</p>
        </div>
      </div>
   
</div>
    </div>
  </section>
  
  <Footer />
  </>
);
}

export default Services;
