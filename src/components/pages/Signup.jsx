import React, { Component } from 'react';
// import $ from "jquery";
import '../css/login.css';


class Signup extends Component {
  constructor(){
    super();
    this.signupSubmit = this.signupSubmit.bind(this);
    this.state = {
      firstName :'',
      lastName : '',
      email : '',
      password : '',
      password_confirmation: '',
      userType: '',
      phone: '',
    }
  }

  async signupSubmit(e){
    e.preventDefault();
    var url = " http://127.0.0.1:8000/api/users/signup";
    var data ={
      email:this.state.email,
      password:this.state.password,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      phone:this.state.phone,
      userType:this.state.userType,
      password_confirmation:this.state.password_confirmation,
    };
    var urlData = url+"?"+data;
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": 'application/json',
                 "Accept": 'application/json',
      }
  })
  result=await result.json()
  console.log(result)
   
  }
  
  valueInputChange = tags => (event) =>{
    switch(tags)
    {

      case 'firstName':
        this.setState({firstName: event.target.value})
        break;
        case 'lastName':
            this.setState({lastName: event.target.value})
            break;
            case 'phone':
              this.setState({phone: event.target.value})
              break;    
              case 'userType':
                this.setState({userType: event.target.value})
                break;    
                case 'password_confirmation':
                  this.setState({password_confirmation: event.target.value})
                  break;  

        case 'email':
            this.setState({email: event.target.value})
            break;
        case 'password':
            this.setState({password: event.target.value})
            break;
        default:
            break;
    }
  }



  componentDidMount() {
    console.log("signup component did mount");
  }
 
  componentWillUnmount(){
    console.log("signup component will unmount");
  }
  
  render() {
    return (
        <>

<section className='login'>
      
          <div classname='loginbox'>
            <div className='registercont'>
              <div className='loginform'id="signupForm" method="post" onSubmit={this.signupSubmit} >
                <h2 className='titlelogin'> Sign Up </h2>
                 
      <form className='inputs'>
                 <div className="inputbox">
                    
                        <div className="inputbox"><input type="text" className="form-controll" name="first_name" id="first_name" placeholder="First Name" required="required" value={this.state.firstName} onChange={this.valueInputChange('firstName')}/></div>
                        <div className="inputbox"><input type="text" className="form-controll" name="last_name" id="last_name" placeholder="Last Name" required="required" value={this.state.lastName} onChange={this.valueInputChange('lastName')}/></div>
                          	
                </div>
                            <div className="inputbox">
                                <input type="email" className="form-controll" name="email" id="email" placeholder="Email" required="required" value={this.state.email} onChange={this.valueInputChange('email')}/>
                            </div>

                            <div className="inputbox">
                                <input type="number" className="form-controll" name="phone" id="phone" placeholder="Phone Number" required="required" value={this.state.phone} onChange={this.valueInputChange('phone')}/>
                            </div>

                            <div className="inputbox">
                                <input type="text" className="form-controll" name="userType" id="userType" placeholder="User Type" required="required" value={this.state.userType} onChange={this.valueInputChange('userType')}/>
                            </div>


                                      <div className="inputbox">
                                          <input type="password" className="form-controll" name="password" id="password" placeholder="Password" required="required" value={this.state.password} onChange={this.valueInputChange('password')}/>
                                      </div>
                                              <div className="inputbox">
                                                  <input type="password" className="form-controll" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" required="required" value={this.state.password_confirmation} onChange={this.valueInputChange('password_confirmation')}/>
                                              </div>        
                                                      <div className="inputbox">
                                                          <input type="submit" className="form-controll" name="btnsignup" id="btnsignup" value="Sign Up"/>
                                                      </div>
    
                      <p className="transfer"> Already have an account? <a className='trans' href="/">Sign in here</a></p>
              
        
              
                </form>
              </div>
            </div>
          </div>
          
        </section>


        </>
        );
      }
    }
      
      export default Signup;