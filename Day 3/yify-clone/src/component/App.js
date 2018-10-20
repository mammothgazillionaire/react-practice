import React, { Component } from 'react';
import './../style/App.scss';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json').then(res => res.json()).then(data => this.setState({ movies: data.data.movies }));
  }

  render() {
    const {movies} = this.state;
    return (
      <ul className="movielist">{movies.map(movie =>
                        <li className="movies">
                          <img className="covers" src={movie.medium_cover_image}></img>
                          <a className="link" href={movie.url}>{movie.title}</a>
                        </li>)}
      </ul>
    );
  }
}

export default Movies;
