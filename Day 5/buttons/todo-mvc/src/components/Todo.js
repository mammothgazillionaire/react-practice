import React, { Component } from 'react';
import Task from './Task';
import Footer from './Footer';

class Todo extends Component {

  constructor(props){
    super(props);
    this.state= {
      count: 0,
      value:'',
      activeTab: 'all',
      list: [],
      activeList: [],
      completedList: []
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
    let filteredArray = newArray.filter(todo => (todo.done === true));
    let activeArray = newArray.filter(todo => (todo.done === true));
    this.setState({
      list: [...newArray],
      acitveTodoArray: activeArray,
      completedTodoArray: filteredArray
    });
  
  }

  deleteTask = (e) => {

    var newArray = this.state.list;
    let index = e.target.dataset.id;
    newArray.splice(index, 1);
    this.setState({list: [...newArray]});
    // this.state.count--;
  }


  handleAll = () => {
    let allTodo = this.state.list.map(todo => todo);
    this.setState({
      list: allTodo,
      activeTab: "all"
    });
  }

  handleActive = () => {
    let activeTodo = this.state.list.filter(todo => (todo.done === false))
    this.setState({
      activeList: activeTodo,
      activeTab: 'active'
    })
  }

  handleCompleted = () => {
    let completedTodo = this.state.list.filter(todo => (todo.done === true))
    this.setState({
      completedList: completedTodo,
      activeTab: 'completed'
    })
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
        <Footer 
        //  array={this.state.activeTab === 'all' ? this.state.list : this.state.activeTab === 'completed' ? 
        //  this.state.completedList : this.state.activeTab === 'active' ? 
        //  this.state.activeList : this.state.acitveTodoArray}
         
         handleCount={this.state.list.filter(todo => todo.done === false).length} 
         handleAll={this.handleAll} handleActive={this.handleActive} 
         handleCompleted={this.handleCompleted} 
         activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}

export default Todo;

