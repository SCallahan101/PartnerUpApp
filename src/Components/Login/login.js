import React, { Component } from 'react';
// import SignUpForm from './SignUpForm/sign-up-form.js';
import {Link, Route } from "react-router-dom";
import "./login.css";

class Login extends Component {
    render(){
       return(
        <div id="firstProcess">
          <form id="loginContainer">
            <h1>Login In</h1>
            <label htmlFor="email">Email</label>
            <input type="email" className="loginBox" id="email"/>
            <label htmlFor="password">Password</label>
            <input type="text" className="loginBox" id="password"/>
            <button type="submit" className="loginBox loginSubmit">Enter</button>
          </form>
          {/* <SignUpForm /> */}
          <h3>OR</h3>
          <p>If you are new, then click this</p>
          <Link to="/login/sign-up">
              <button>Sign Up</button>
          </Link>
        </div>
       )
    }
}

export default Login;