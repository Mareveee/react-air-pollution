import React, { Component } from 'react';
import MessageContainner from './MessageContainner'
import { Connector } from 'mqtt-react';
import './Dashboard.css'

class Dashboard extends Component {

  render() {
    return (
      <Connector mqttProps="ws://54.169.105.27:8083">
      <div className="animated fadeIn">
          <MessageContainner />
        </div>
      </Connector>
    );
  }
}

export default Dashboard;
