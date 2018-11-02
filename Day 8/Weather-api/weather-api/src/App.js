import React, { Component } from 'react';
import Display from './Display'
import './App.css';
// import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
       data: {},
       isLoading: true,
       error: null
    }
  }

  handleChange = e => {
    this.setState({
      value : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchData();
  }


  fetchData = () => {
    const {value} = this.state;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=0f262020d9db0ebd266dabe49baeef1d
    `)
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
      })
  }

  render() {
    const { value , data , isLoading } = this.state
    return (
      <div className="App">
      <div className="center">
        <h1 className="Weather">Weather</h1>
      </div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        onChange={this.handleChange}
        value={value}
        className="search"
        />
      </form>
        {
          Object.keys(data).length === 0 ? "Loading...." : <Display data={data}/>
        }
      </div>
    );
  }
}

export default App;
