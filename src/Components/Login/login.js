import React, { Component } from 'react';
import SignUpForm from './SignUpForm/sign-up-form.js';

class Login extends Component {
    render(){
       return(
        <div>
          <form>
            <h1>Login In</h1>
                
          </form>
          <SignUpForm />
        </div>
       )
    }
}

export default Login;