import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Post extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let {data} = this.props;
    return (
     data.map(d => 
        <Router>
          <Link to="/">
          <h1>{d.heading}</h1>
          <h2>{d.description}</h2>
          <p>{d.Post}</p>
          </Link>
          <Route/>
        </Router>
        )
      
    );
  }
}

export default Post;
