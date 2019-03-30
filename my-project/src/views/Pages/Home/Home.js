import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {
  AppAside,
  AppBreadcrumb,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../../_nav';
// routes config
import routes from '../../../routes';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    const { children, ...attributes } = this.props;
    return (
      <div className="app">
        
        
      </div>
  );
}
}



export default Home;
