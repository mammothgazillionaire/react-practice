import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isChecked : true
    };
  }

  handleClick = () => {
    this.setState({isChecked : !this.state.isChecked});
  }

  render() {
    const value = this.state.isChecked;
    return (
      <div className="App">
          <Para value={this.state.isChecked}/>
          <label>
            <input type="checkbox" checked={this.state.isChecked} onClick={this.handleClick}/>
            <div>
              <span className="on">On</span>
              <span className="off">Off</span>
            </div>  
            <i></i>
          </label>
          <button onClick={this.handleClick}>
            {
              value ? "on" : "off"
            }
          </button>
      </div>
    );
  }
}

class Para extends React.Component {
  render() {
    const item = this.props.value ;
    console.log(this.props.value);
    return (
        <div>
           {
             item ? <h4>Switch is on </h4> : <h4>Switch is off</h4>
           }
        </div>
     );
  }
}


export default App;
