import React, { Component } from 'react';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state= {
      id: 1 ,
      value:'',
      list: []
    };
    
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("the value is " + this.state.value);

    this.setState({
      list: [...this.state.list, this.state.value]
    })
  }

  render() {
    return (
      <div className="todos">
      <h1>Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="val" value={this.state.value} onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        </form>
        <React.Fragment>
        {this.state.list.map(item => <li id={this.state.id}>{item}</li>)}
        </React.Fragment>
      </div>
    );
  }
}

export default Todo;

