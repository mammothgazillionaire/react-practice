import React, { Component } from 'react';
import UserFollowers from './UserFollowers';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      username: ''
    }
  }
  componentWillMount() {
    this.setState({ username: this.props.username})
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(res => res.json())
      .then(data => this.setState({ userData: data }))
  }
  render() {
    return (
      <React.Fragment>
        <div className="user"> 
          <UserInfo userData={this.state.userData} />
          <UserRepos username={this.state.username}/>
          <UserFollowers username={this.state.username}/>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetails;