import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/login.css';


class Login extends Component {
  constructor(){
    super();  
    // var history = useHistory();
    this.signinSubmit = this.signinSubmit.bind(this);
    this.valueInputChange = this.valueInputChange.bind(this);
    this.state = {
      email : '',
      password : '',
       error : ''
    }
    
  }

  routingFunction = (param) => {
      this.props.history.push({
        pathname: '/home',
        state: param
      })
    }


  async signinSubmit(e){ 
    e.preventDefault()
    var url = "http://127.0.0.1:8000/api/users/login";
    var data ={email:this.state.email,password:this.state.password};
    var urlData = url+"?"+data;
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": 'application/json',
                 "Accept": 'application/json',
      }
  })
  
  result=await result.json()
  // console.log(result)
  console.log(result.error)
        if(result.id!==undefined){
           this.routingFunction()
        }
          // this.setState({error: result.error})
          // console.log(this.error)
  }

  valueInputChange = tags => (event) =>{
    switch(tags)
    {
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
   console.log("login component did mount");
  }

  componentWillUnmount(){
    console.log("login component will unmount");
  }





render() {
    return (
      <>
        <section className='login'>
         <div className='color'></div>
         
          <div classname='loginbox'>
            <div className='logincont'>
              <div className='loginform'>
                <h2 className='titlelogin'> Login </h2>
                 
      <form className='inputs' id="signinForm" onSubmit={this.signinSubmit} >

    <div className="inputbox">
        <input type="email" className="form-controll" name="email"id="email" placeholder="Email" required="required" value={this.state.email} onChange={this.valueInputChange('email')}/>
    </div>
    <div className="inputbox">
     <input type="password" className="form-controll" name="password" id="password" placeholder="Password" required="required" value={this.state.password} onChange={this.valueInputChange('password')}/>
     <p>{this.error}</p>
     </div>
   
    <div className="inputbox">
                <input type="submit" name="btnsignin" className="form-controll" value="Sign In"/>
            </div>

      <p className="transfer"> Don't have an account? <a className='trans' href="/signup">Sign up here</a></p>
                </form>
              </div>
            </div>
          </div>
          
        </section>
              </>
    );
  }
}
  
  export default Login;
  