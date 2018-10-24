import React, { Component } from 'react';
import Task from './Task';
import Footer from './Footer';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state= {
      count: 0,
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
      list: [...this.state.list, {value: this.state.value,done: false}]
    })
    // this.state.count++;
  }

  checkTask = (e) => {
    var newArray = this.state.list;
    let index = e.target.dataset.id;
    newArray[index].done = !newArray[index].done;
    this.setState({list: [...newArray]});
    // if(newArray[index].done === !false) return this.state.count--;
    // this.state.count++;
  }

  deleteTask = (e) => {

    var newArray = this.state.list;
    let index = e.target.dataset.id;
    newArray.splice(index, 1);
    this.setState({list: [...newArray]});
    // this.state.count--;
  }

  isCompleted = (e) => {
    var newArray = this.state.list;
    let index = e.target.dataset.id;
    newArray[index].done = !newArray[index].done;
    if(newArray[index].done === !newArray[index].done){
      this.setState({list:[...newArray]})
    }
  }


  render() {
    return (
      
      <div className="todos">
      <h1>Todo</h1>
      <div className="major">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="add todo" className="val" value={this.state.value} onChange={this.handleChange}></input>
        </form>
        <React.Fragment>
        {this.state.list.map((item,i) => <Task key={i} 
        id={i}  item={item.value} handleDelete={this.deleteTask} handleCheck={this.checkTask} />)}
        </React.Fragment>
        <Footer handleCount={this.state.list.length} completedItems={this.isCompleted}/>
        </div>
      </div>
    );
  }
}

export default Todo;

