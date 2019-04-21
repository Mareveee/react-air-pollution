import React, { Component } from 'react';
import './Dashboard.css'
import {Line} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, } from '@coreui/coreui/dist/js/coreui-utilities'
import {
  Card,
  CardBody,
  Col,
  Row,
  CardHeader,
} from 'reactstrap';
import axios from 'axios';
import Maps from './Maps'

const brandPrimary = getStyle('--primary')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class Dashfinal extends Component{
  constructor(props){
    super(props)
    this.state ={
      locationselect : 0,
      locationName:[],
      locationID:[],
      aqi:[0,0,0,0,0,0,0],
      temperature:[0,0,0,0,0,0,0],
      humidity:[0,0,0,0,0,0,0],
      pressure:[0,0,0,0,0,0,0],
      pm25:[0,0,0,0,0,0,0],
      pm10:[0,0,0,0,0,0,0],
      o3:[0,0,0,0,0,0,0],
      co:[0,0,0,0,0,0,0],
      no2:[0,0,0,0,0,0,0],
      so2:[0,0,0,0,0,0,0],
      AQI:0
    }
  }
    render() {
        console.log("dashfinal",this.props.data)
          
        return (
          <div className="animated fadeIn">
            
          </div>
        );
      }
}

export default Dashfinal
