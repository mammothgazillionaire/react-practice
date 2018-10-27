import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    let { avatar_url, login } = this.props.user;
    return (
      <div className="flexed" onClick={() => this.props.userClick(login)}>
        <img src={avatar_url} alt={login} className="flexed" />
        <p>{login}</p>
      </div>
    );
  }
}


export default SearchResult;