import React, { Component } from 'react';

class UserRepos extends Component {
  constructor() {
    super();
    this.state = {
      userRepos: null 
    }
  }

componentDidMount(){
  let url = `https://api.github.com/users/${this.props.username}/repos`;
  fetch(url)
  .then(res => res.json())
  .then(data => this.setState({ userRepos: data }))
}

  render() {
    return (
      <div >
        <p>Repos</p>
        { this.state.userRepos ? 
          (this.state.userRepos.map(repos => <div>
            <a href={repos.html_url}>{repos.name}</a>
            <p>{repos.language}</p>
            <p>{repos.fork}</p>
            <p>{repos.watchers_count}</p>
            </div>)) : ''
        }
      </div>
    );
  }
}

export default UserRepos;