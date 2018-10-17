import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return (
      <div className="form">  
        <form className="login__form">
          <h1 className="heading">LOG IN TO YOUR ACCOUNT</h1>     
          <input className="form__elements" type="email" placeholder="Username,Mobile number or Email" for="email" required></input>
          <input className="form__elements" type="password" placeholder="Password" required></input>
          <button className="btn">Sign in</button>
          <label className="signedIn">
          <input type="checkbox"></input>
            <span>Stay Signed In</span>
          </label>
        </form>
        <a href="#" className="anchor">Forgot password</a>
      </div>
    )
  }
}

export default LogIn;
