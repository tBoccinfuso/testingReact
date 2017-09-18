import React, { Component } from 'react';
import './App.css';
import Register from './Register.js';
import TestPage from './TestPage.js';
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
       <button onClick={()=>this.route("TestPage")}>Login</button>
       <button onClick={()=>this.route("Register")}>Register</button>
       <button onClick={()=>this.route("ContactUs")}>Contact Us!</button>
       {(this.state.page === "TestPage")? <TestPage/> : "" }
       {(this.state.page === "Register")? <Register/> : "" }    
       {(this.state.page === "ContactUs")? <ContactUs/> : "" }    
      </div>
    );
  }
}

export default App;
