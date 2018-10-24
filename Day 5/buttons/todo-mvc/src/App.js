import React, { Component } from 'react';
import './App.scss';
import Todo from '../src/components/Todo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo/>
      </div>
    );
  }
}

export default App;



