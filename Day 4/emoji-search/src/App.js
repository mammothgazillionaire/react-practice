import React, { Component } from 'react';
import './App.scss';
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Emoji from "../src/components/Emoji";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filteredEmoji: filterEmoji("", 20)
  //   };
  // }

  // handleSearchChange = event => {
  //   this.setState({
  //     filteredEmoji: filterEmoji(event.target.value, 20)
  //   });
  // };
  
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Search /> */}
        <Emoji/>
      </div>
    );
  }
}

export default App;
