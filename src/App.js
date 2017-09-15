import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import Register from './Register.js';
import TestPage from './TestPage.js';


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
      <div classNameName="App">
       <button onClick={()=>this.route("TestPage")}>Test</button>
       <button onClick={()=>this.route("Register")}>Test</button>
       {(this.state.page === "TestPage")? <TestPage/> : "" }
       {(this.state.page === "Register")? <Register/> : "" }       
      </div>
    );
  }
}

export default App;
