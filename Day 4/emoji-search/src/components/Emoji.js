import React, { Component } from 'react';
import * as data from './../data.json';
import EmojiCard from './EmojiCard';

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiesArray : []
    };
  }
  
  componentDidMount() {
    this.setState({
      emojiesArray : data.default
    })
  }

  render() {

    return (
      <div className="emojis">
        {this.state.emojiesArray.map(item => (
          <EmojiCard details={item}/>
        ))}
      </div>
    );
  }
}

export default Emoji;
