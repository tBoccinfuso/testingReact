import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
//import {validateForm} from './javascript/RegisterVal.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      confirmPass: "",
      firstName: "",
      lastName: "",
      contactEmail: "",
      contactPhone: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});    
  }

  handleSubmit(e){
    e.preventDefault();
    //validateForm(this.state);
    $.post("http://localhost:1245/signup", this.state);    
  }
  render() {
    return (
      <div>          
        <h1>Register</h1>  
            <form onSubmit={this.handleSubmit}>  
              <section id="contact-section">
                  <div className="row">
                    <label htmlFor="userName">User Name: *<input type="text" id="userName" name="userName" value={this.state.userName}
                    onChange={this.handleInputChange}/></label><br/>
                    <label htmlFor="password">Password: *<input type="password" id="password" name="password" value={this.state.password}
                    onChange={this.handleInputChange}/></label><br/>
                    <label htmlFor="confirmPass">Confirm Pass: *<input type="password" id="confirmPass" name="confirmPass" value={this.state.confirmPass}
                    onChange={this.handleInputChange}/></label><br/>
                    <label htmlFor="firstName">First Name: *<input type="text" id="firstName" name="firstName" value={this.state.firstName}
                    onChange={this.handleInputChange}/></label><br/>
                    <label htmlFor="lastName">Last Name: *<input type="text" id="lastName" name="lastName" value={this.state.lastName}
                    onChange={this.handleInputChange}/></label>         
                  </div>
                  <div className="row">
                    <label htmlFor="contactEmail">Email: *<input type="text" id="contactEmail" name="contactEmail" placeholder="Contact Email" value={this.state.contactEmail}
                    onChange={this.handleInputChange}/></label><br/>
                    <label htmlFor="contactPhone">Phone: *<input type="text" id="contactPhone" name="contactPhone" placeholder="Contact Phone" value={this.state.contactPhone}
                    onChange={this.handleInputChange}/></label><br/>            
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
