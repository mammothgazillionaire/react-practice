import React, { Component } from 'react';
import * as data from './../data.json';
import EmojiCard from './EmojiCard';

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiesArray : [],
      query : ''
    };
  }
  
  componentDidMount() {
    this.setState({
      emojiesArray : data.default
    })
  }

  handleChange = (e) => {
    this.setState({
      query : e.target.value
    })
  }

  render() {
    let filteredArray;
    const {query, emojiesArray} = this.state;
    if(query){ 
      let match = new RegExp(query, 'i');
      filteredArray = emojiesArray.filter(emoji => match.test(emoji.title));
    } else {
      filteredArray = emojiesArray;
    }


    return (
      <div className="emojis">
        <input type="text" onChange={this.handleChange}/>
        {filteredArray.map(item => (
          <EmojiCard details={item}/>
        ))}
      </div>
    );
  }
}

export default Emoji;
