import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/materialize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container center" href="#" class="brand-logo">
              demo
            </a>
          </div>
        </nav>
        <div className="section light-blue lighten-4">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">welcome to the demo</h1>
        </div>
        <div className="section" id="index-banner">
          <div className="container">
            <h1 className="header center orange-text"> demo header </h1>
            <div className="row center">
              <h5 class="header col s12 light"> demo description </h5>
            </div>
            <div className="row center">
              <a href="#" id="download-button" class="btn-large waves-effect waves-light orange">
                  call-to-action button
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;