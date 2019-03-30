import React, { Component, lazy, Suspense } from 'react';
import MessageContainner from './MessageContainner'
import { Connector } from 'mqtt-react';
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic:'application/Newmsg'
    };
  }
  onChange(){
    return 'application/Newmsg'
  }

  render() {
    return (
      <Connector mqttProps="ws://54.169.105.27:8083">
      <div className="animated fadeIn">
          <MessageContainner onChange={this.state.onChange} topic={this.state.topic}/>
        </div>
      </Connector>
    );
  }
}

export default Dashboard;
