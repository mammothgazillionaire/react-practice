import React, { Component } from 'react';
import Details from './Details'
import Repos from './Repos';
import Followers from './Followers';

class Profile extends Component {
  render() {
    return (
      <div>
        <Details/>
        <Repos/>
        <Followers/>
      </div>
    );
  }
}

export default Profile;
