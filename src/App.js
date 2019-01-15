import React, { Component } from 'react';
import Openbotpic from './images/svg/Openbot.svg';
import twitterpic from './images/svg/twitter.svg';
import discordpic from './images/svg/discord.svg';
import githubpic from './images/svg/github.svg';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="jumbotron" id="header">
        <div className="container text-center">
          <img src={Openbotpic} id="banner" alt="OpenbotBanner"/>   
        </div>
      </div>
      <p id="text">Join us discussing & developing free, open-source trading algorithms.</p>
      

      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <p>Code</p>
            <img src={githubpic} id="logos" alt="github"/> 
          </Col>
          <Col xs={6} md={6}>
            <p>Chat</p>
            <img src={discordpic} id="logos" alt="discord"/>   
          </Col>
          <Col xs={6} md={6}>
            <p>Follow</p>
            <img src={twitterpic} id="logos" alt="twitter"/>    
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default App;
