import React, { Component } from 'react';
import Value from './Value'


class Input extends Component {
  
  render() {
    return (
      <div className="inputs">
        <button className="btn">Carla</button>
        <Value className="val"/>
      </div>
    );
  }
}

export default Input;