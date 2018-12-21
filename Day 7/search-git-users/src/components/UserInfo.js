import React, { Component } from 'react';

class UserInfo extends Component {

  render() {
    const { login , avatar_url , name , followers, following , public_repos} = this.props.userData;
    return (
      <div className="user-info">
        <img src={avatar_url} alt={name} className="user--img"></img>
        <p>{name}</p>
        <p>{`followers ${followers}`}</p>
        <p>{`Following ${following}`}</p>
        <p>{`Repos ${public_repos}`}</p>
        <h1>{login}</h1>
      </div>
    );
  }
}

export default UserInfo;