import React, { Component, lazy, Suspense } from 'react';
import Dashboardsshow from './Dashboardsshow'
import MessageContainners from './MessageContainners'
import { Connector } from 'mqtt-react';

import { Bar, Line } from 'react-chartjs-2';
import './Dashboards.css'
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

// import Widget03 from '../../views/Widgets/Widget03'
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));
const Loading = () => <div>Loading...</div>

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
// Card Chart 2
// Card Chart 3
// Card Chart 4
// Social Box Chart
// Main Chart
//Random Numbers

class Dashboards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
    return (
      <Connector mqttProps="ws://18.136.100.79:8083">
      <div className="animated fadeIn">
          <MessageContainners/>
        </div>
      </Connector>
    );
  }
}

export default Dashboards;
