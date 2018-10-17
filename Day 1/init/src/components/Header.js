import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {name} = this.props;
    return (
      <header>
        <nav>
          <ul>
            <li>{name}</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;