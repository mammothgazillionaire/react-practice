import React, { Component } from 'react';

class Buttons extends Component{
  render(){
    return (
      <div className="buttons">
        <button className="signup"><a href="#">Sign Up</a></button>
        <button className="login"><a href="#">Sign In</a></button>
      </div>
    )
  }
}

export default Buttons;