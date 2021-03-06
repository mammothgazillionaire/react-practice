import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      userData: [],
      isloading: false,
      error: null
    }
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  hanldeSubmit = e => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${this.state.query}`).
    then(res => res.json()).
    then(
      data => this.setState({
        userData : data.items
      }));
  }

  render() {
    const {userData} = this.state;
    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>
        <input type="search" onChange={this.handleSearch}></input>
        </form>
        <div className="user">
        <ul className="userlist">
          {
          userData.map(data =>
            <div className="user">
              <img className="avatar" src={data.avatar_url} alt="user" />
              <a href={data.url}>{data.login}</a>
            </div>)
          }
      </ul>
        </div>
      </div>
    );
  }
}

export default Search;