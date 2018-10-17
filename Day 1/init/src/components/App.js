import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CountMe from './CountMe';

export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header name="React Basics" />
        <CountMe />
        <Footer />
      </div>
    );
  }
}
