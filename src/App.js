import React, { Component } from 'react';
import Header from './components/header/Header';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default connect()(App);
