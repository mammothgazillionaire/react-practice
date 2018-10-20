import React, { Component } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Buttons from './buttons';



export class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Buttons className="buttons" />
        <SignUp className="signup_form" />
        <LogIn className="login_form" />
      </div>
    )
  }
}



