import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="form">  
        <form className="signup__form">
          <h1 className="heading">Signup</h1>     
          <input className="form__elements" type="email" placeholder="Mobile number or Email" for="email" required></input>
          <input className="form__elements" type="text" placeholder="Full name" required></input>
          <input className="form__elements" type="text" placeholder="Username" required></input>
          <input className="form__elements" type="password" placeholder="Password" required></input>
          <button className="btn">Sign up</button>
          <a href="#" className="anchor">Login with facebook</a>
        </form>
        
      </div>
    )
  }
}

export default SignUp;
