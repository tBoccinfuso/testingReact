import React, { Component } from 'react';
import './App.css';
import $ from "jquery";

class TestPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userName: "",
          lastname: "",
          contactEmail: "",
          subject: "",
          message: "this is a test"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    
    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});    
    }
    handleSubmit(e){
        e.preventDefault();
        alert('hihihihi');
        $.post("http://localhost:1245/profile");
        
    }
    render(){
        return(
            <div>
            <h1>Login:</h1>
            
              <form onSubmit={this.handleSubmit}>  
              <section>
                  <div class="row">
                    <label htmlFor="userName">User Name: *<input type="text" id="userName" name="userName" /></label><br/>
                    <label htmlFor="userName">Password: *<input type="password" id="password" name="password" /></label><br/>  
                  </div>            
                </section> 
            
                <section>
                  <button id="btnSubmit" class="button"  type="submit" >Login</button>                    
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

export default TestPage;