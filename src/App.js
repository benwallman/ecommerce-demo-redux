import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './components/header/Header';
import Panels from './components/panels/Panels';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Panels />
      </div>
    );
  }
}

export default connect()(App);
