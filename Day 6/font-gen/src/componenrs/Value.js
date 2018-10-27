import React, { Component } from 'react';



class Value extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };


  render() {
    return (
      <React.Fragment>
        <input className="takeValue" type="text" onChange={this.handleChange}></input>
        <div className="inputs">
          <div className="boxes">
          <button className="btn">Carla</button>
          <label className="val val-1">{this.state.value}</label>
          </div>
          <div className="boxes">
          <button className="btn">Helvetica Nueu</button>
          <label className="val val-2">{this.state.value}</label>
          </div>
          <div className="boxes">
          <button className="btn">Bree Serif</button>
          <label className="val -3">{this.state.value}</label>
          </div>
          <div className="boxes">
          <button className="btn">Lato</button>
          <label className="val val-4">{this.state.value}</label>
          </div>
          <div className="boxes">
          <button className="btn">Cabin</button>
          <label className="val val-5">{this.state.value}</label>
          </div>
          <div className="boxes">
          <button className="btn">Promxima Nova</button>
          <label className="val val-6">{this.state.value}</label>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default Value;
