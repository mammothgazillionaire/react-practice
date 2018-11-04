import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    return (
      <Link to="/Post">
      <h1>{}</h1>
      <h2>{}</h2>
      <p>{}</p>
      </Link>
    );
  }
}

export default Post;
