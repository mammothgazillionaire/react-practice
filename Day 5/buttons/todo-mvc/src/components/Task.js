import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="container">
          <input type="checkbox" className="check" onClick={this.props.handleCheck} data-id={this.props.id}></input>
          <span className="checkmark"></span>
          <label className="text">{this.props.item}</label>
          <button className="close" data-id={this.props.id} onClick={this.props.handleDelete}>close</button>
      </div>
    );
  }
}

export default Task;
