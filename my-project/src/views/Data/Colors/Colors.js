import React, { Component } from 'react';
import './Colors.css'
import 'react-circular-progressbar/dist/styles.css';
import './Custom.css';
import MessageContainner from './MessageContainner'
import { Connector } from 'mqtt-react';

class Colors extends Component {

  render() {
   
    
    return (
      <Connector mqttProps="ws://54.169.105.27:8083">
      <div className="animated fadeIn">
          <MessageContainner/>
        </div>
      </Connector>
    );
  }
}

export default Colors;
