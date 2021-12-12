import React from 'react';
import './App.css';
import Index from './components/pages/Index';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Appointments from './components/pages/Appointments.jsx';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/appointments' component={Appointments} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
