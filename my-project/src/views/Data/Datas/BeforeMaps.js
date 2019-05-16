import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {
    CardBody,
    Col,
    Row,
  } from 'reactstrap';
import React, { Component} from 'react';
import axios from 'axios'
import Maps from './Maps'
class Datas extends Component{

  constructor(props){
    super(props)
    this.state ={
      aqi:[0,0]
    }
  }

  ColorAQI = (props) =>{
    let colorpm10
    if(props >= 0 & props <=25){
      colorpm10 = '00BFFF'
    }
    else if(props > 25 & props <=50){
      colorpm10 = '66CC66'
    }
    else if(props > 50 & props <=100){
      colorpm10 = 'FFCC33'
    }
    else if(props > 100 & props <= 150){
      colorpm10 = 'FF9933'
    }
    else if(props > 150){
      colorpm10 = 'FF0033'
    }
    return colorpm10
  }

  getdata = (props) =>{
    if(props === undefined){
      let urlaqikmitl = 'http://54.169.105.27:1880/AQInewest?deviceName=kmitl'
      let urlaqiLad = 'http://54.169.105.27:1880/AQInewest?deviceName=Ladkrabang'
      axios.get(urlaqikmitl)
      .then(response => {
        this.state.aqi[0] = response.data[0].AQINOW
      })
      axios.get(urlaqiLad)
      .then(response => {
        this.state.aqi[1] = response.data[0].AQINOW
      })
    }
    else if(props !== undefined){
        if(props.deviceName === "kmitl"){
            this.state.aqi[0] = props.AQINOW
        }
        else if(props.deviceName === "Ladkrabang"){
            this.state.aqi[1] = props.AQINOW
        }
        else{
            let urlaqikmitl = 'http://54.169.105.27:1880/AQInewest?deviceName=kmitl'
            let urlaqiLad = 'http://54.169.105.27:1880/AQInewest?deviceName=Ladkrabang'
            axios.get(urlaqikmitl)
            .then(response => {
                this.state.aqi[0] = response.data[0].AQINOW
            })
            axios.get(urlaqiLad)
            .then(response => {
                this.state.aqi[1] = response.data[0].AQINOW
            })
        }
    }
  }

    render() {
      this.getdata(this.props.data.data[0])//location change num in array
        return (
          <div className="animated fadeIn">
            <Maps aqikmitl={this.state.aqi[0]} aqilad={this.state.aqi[1]} colorKmitl={this.ColorAQI(this.state.aqi[0])} colorLad={this.ColorAQI(this.state.aqi[1])}/>
          </div>
        );
      }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC__lyq6VWQhcoffkhsFVf3US2Jfa138ng")
})(Datas)