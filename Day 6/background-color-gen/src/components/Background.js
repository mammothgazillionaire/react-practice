import React, { Component } from 'react';


class Background extends Component {
  constructor(props){
    super(props);
      this.state = {
        r:0,
        g:0,
        b:0
      }
    }
  

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  
  render() {
    const {r, g, b} = this.state;
    const bg = {
      background:`rgb(${r},${g},${b})` 
    }
    return (
      <div className="background" style={bg}>
        <div className="boxes">
        <label>R:</label>
        <input type="range" name="r" min="0" max="255" value={r} onChange={this.handleChange}></input>
        </div>
        <div className="boxes">
        <label>G:</label>
        <input type="range" name="g" min="0" max="255" value={g} onChange={this.handleChange}></input>
        </div>
        <div className="boxes">
        <label>B:</label>
        <input type="range" name="b" min="0" max="255" value={b} onChange={this.handleChange}></input>
        </div>
        <p>rgb{`( ${r} , ${g} , ${b} `}</p>
        {/* <div className="boxes">
        <label>A:</label>
        <input type="range" name="points" min="0" max="255"></input>
        </div> */}
      </div>
    );
  }
}

export default Background;