import React, { Component } from 'react';

class EmojiCard extends Component {
  render() {
    const {title, symbol} = this.props.details
    return (
      <div className="flexed-card">
        <h1 className="titles">{title}</h1>
        <div className="symbols">{symbol}</div>
      </div>
    );
  }
}

export default EmojiCard;
