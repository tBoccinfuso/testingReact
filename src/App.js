import React, { Component } from 'react';
import './App.css';
import Register from './Register.js';
import Login from './Login.js';
import ContactUs from './ContactUs.js';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
  route(targetPage){
    this.setState({ page: targetPage });
  }
  
  render() {
    return (
      <div>      
       <button onClick={()=>this.route("Login")}>Login</button>
       <button onClick={()=>this.route("Register")}>Register</button>
       <button onClick={()=>this.route("ContactUs")}>Contact Us!</button>
       {(this.state.page === "Login")? <Login/> : "" }
       {(this.state.page === "Register")? <Register/> : "" }    
       {(this.state.page === "ContactUs")? <ContactUs/> : "" }    
      </div>
    );
  }
}

export default App;
