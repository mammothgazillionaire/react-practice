import React, { Component } from 'react';

export default class CountMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.addOne = this.addOne.bind(this);
  }
  addOne() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.addOne}>Add 1</button>
      </div>
    );
  }
}