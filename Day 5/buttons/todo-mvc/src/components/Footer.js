import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer" array= {this.props.array}>
        <button className="one btn">{this.props.handleCount} items left</button>
        <button className="btn" onClick={this.props.handleAll}>All</button>
        <button className="btn" onClick={this.props.handleActive}>Active</button>
        <button className="btn" onClick={this.props.handleCompleted}>Completed</button>
      </div>
    );
  }
}

export default Footer;
