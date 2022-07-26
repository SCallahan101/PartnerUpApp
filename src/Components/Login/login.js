import React, { Component } from 'react';
// import SignUpForm from './SignUpForm/sign-up-form.js';
import {Link, Route } from "react-router-dom";

class Login extends Component {
    render(){
       return(
        <div id="firstProcess">
          <form id="loginContainer">
            <h1>Login In</h1>
            <label for="email">Email:</label>
            <input type="email" className="loginBox" id="email"/>
            <label for="password">Password:</label>
            <input type="text" className="loginBox" id="password"/>
            <input type="submit" className="loginBox loginSubmit"/>
          </form>
          {/* <SignUpForm /> */}
          <h3>OR</h3>
          <Link to="./SignUpForm/sign-up-form.js">
              <button>Sign Up</button>
          </Link>
        </div>
       )
    }
}

export default Login;