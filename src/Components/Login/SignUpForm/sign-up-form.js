import React, { Component } from 'react';

class SignUpForm extends Component {
    render(){
       return(
        <div>
          <form>
            <h1>Sign up In</h1>
             <label for="firstName">First Name</label>
             <input type="text" placeholder="First Name" className="signUpText" id="firstName" />
             <label for="lastName">Last Name</label>
             <input type="text" placeholder="Last Name" className="signUpText" id="lastName" />
             <label for="telephone">Cellphone Number</label>
             <input type="tel" placeholder="Cell Number" className="signUpText" id="telephone" />
             <label for="email">Email</label>
             <input type="email" placeholder="Email" className="signUpText" id="email" />
               //more information later
          </form>
        </div>
       )
    }
}

export default SignUpForm;