import React, { Component } from 'react';
import './App.css';
import $ from "jquery";

class Register extends Component {
  handleSubmit(e){
    $.post("http://localhost:1245/signup");
    e.preventDefault();
  }
  render() {
    return (
      <div classNameName="App">
          
        <h1>Register</h1>
  
            <form onSubmit={this.handleSubmit}>  
            <section id="contact-section">
                <div className="row">
                  <label htmlFor="userName">User Name: *<input type="text" id="userName" name="userName" /></label><br/>
                  <label htmlFor="password">Password: *<input type="password" id="password" name="password" /></label><br/>
                  <label htmlFor="confirmPass">Confirm Pass: *<input type="password" id="confirmPass" name="confirmPass" /></label><br/>
                  <label htmlFor="firstName">First Name: *<input type="text" id="firstName" name="firstName" placeholder="First Name" /></label><br/>
                  <label htmlFor="lastName">Last Name: *<input type="text" id="lastName" name="lastName" placeholder="Last Name" /></label>         
                </div>
                <div className="row">
                  <label htmlFor="contactEmail">Email: *<input type="text" id="contactEmail" name="contactEmail" placeholder="Contact Email"/></label><br/>
                  <label htmlFor="contactPhone">Phone: *<input type="text" id="contactPhone" name="contactPhone" placeholder="Contact Phone"/></label><br/>            
                  </div>              
            </section> 
          
              <section className="controls">
                <button id="btnSubmit" className="button"  type="submit" >Sign up</button>
                  
              </section>
                <em>* Required Info!</em>
                <div>     
                  <p id="registerError"></p>   
                </div>
            
            </form>  
      </div>
    );
  }
}

export default Register;
