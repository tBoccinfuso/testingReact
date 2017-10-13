import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import {validateForm} from './javascript/ContactVal.js';

class ContactUs extends Component{
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          contactEmail: "",
          subject: "",
          message: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleChange(event) {
        this.setState({message: event.target.value});
      }
    handleSubmit(e){
        e.preventDefault();
        if(validateForm(this.state) === true){
        $.post("http://localhost:1245/contact", this.state);   
        }
    }
    render(){
        return(
            <div>
            <h1>Contact Request Form</h1>
            <form onSubmit={this.handleSubmit}>
            
            <section id="contact-section">
                <div>
                  <label htmlFor="firstName">First Name: *<input type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName}
                  onChange={this.handleInputChange}/></label>
                  <label htmlFor="lastName">Last Name: *<input type="text" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName}
                  onChange={this.handleInputChange}/></label>
                   
                </div>
                <div>
                  <label htmlFor="contactEmail">Contact Email: *<input type="text" id="contactEmail" name="contactEmail" placeholder="Contact Email" value={this.state.contactEmail}
                  onChange={this.handleInputChange}/></label>
                  </div>
            </section>
             
                <div>
                <label htmlFor="subject">Subject: *<input type="text" id="subject" name="subject" placeholder="subject"  value={this.state.subject}
                onChange={this.handleInputChange}/></label><br/>
                  <label>Message: <textArea value={this.state.message} onChange={this.handleChange} />
                  </label>
                </div>
              
              <section className="controls">
                <button id="btnSubmit" className="button"  type="submit" >Send </button>                  
              </section>
                <em>* Required Info!</em>
                <div>     
                  <p id="contactError"></p>   
                  </div>
            
            </form>  
            </div>
        );
    }
}

export default ContactUs;