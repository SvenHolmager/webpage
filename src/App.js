import React, { Component } from 'react';
import logo from './images/svg/Openbot.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="jumbotron" id="header">
          <div class="container text-center">
            <img src={logo} id="openbotlogo"/>   
          </div>
        </div>
        <div class="container-fluid bg-3 text-center">    
          <p>Join us discussing & developing free, open-source trading algorithms.</p>
        </div>
  

      </div>
    );
  }
}

export default App;
