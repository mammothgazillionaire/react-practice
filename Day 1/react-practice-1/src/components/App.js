import React, { Component } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

export class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <SignUp className="signup_form" />
        <LogIn className="login_form" />
      </div>
    )
  }
}



