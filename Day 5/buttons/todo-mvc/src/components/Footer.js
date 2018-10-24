import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <button className="one btn">{this.props.handleCount} items left</button>
        <button className="btn">All</button>
        <button className="btn">Active</button>
        <button className="btn" onClick={this.props.completedItems}>Completed</button>
      </div>
    );
  }
}

export default Footer;
