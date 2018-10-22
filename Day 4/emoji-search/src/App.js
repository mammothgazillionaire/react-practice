import React, { Component } from 'react';
import './App.scss';
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Emoji from "../src/components/Emoji";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <Emoji />
      </div>
    );
  }
}

export default App;
