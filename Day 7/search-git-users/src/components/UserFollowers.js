import React, { Component } from 'react';

class UserFollowers extends Component {
  constructor() {
    super();
    this.state = {
      userFollowers: null 
    }
  }

componentDidMount(){
  let url = `https://api.github.com/users/${this.props.username}/followers`;
  fetch(url)
  .then(res => res.json())
  .then(data => this.setState({ userFollowers: data }))
}

  render() {
    return (
      <div className="followers">
        <p>Followers</p>
        { this.state.userFollowers ? 
          (this.state.userFollowers.map(user => <div className="profiles">
            <img src={user.avatar_url} alt="img"></img>
            <p>{user.login}</p>
            </div>)) : ''
        }
      </div>
    );
  }
}

export default UserFollowers;