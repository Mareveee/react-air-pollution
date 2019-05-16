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
  CardHeader
} from 'reactstrap';
import axios from 'axios';
import CircularProgressbar from 'react-circular-progressbar';
import '../Data/Colors/Colors.css'
import '../Data/Colors/Custom.css'
import '../Data/Typography/histoical.css'
import Selectgraph from './selectgraph'

let tem = []


class DashboardShow extends Component{
  constructor(props){
    super(props)
    this.state ={
      showdashboard:false,
      locationselect : 0,
      locationName:[],
      locationID:[],
      aqi:[0,0,0,0,0,0,0],
      tem0:0,
      temperature:[0,0,0,0,0,0,0],
      humidity:[0,0,0,0,0,0,0],
      pressure:[0,0,0,0,0,0,0],
      pm25:[0,0,0,0,0,0,0],
      pm10:[0,0,0,0,0,0,0],
      o3:[0,0,0,0,0,0,0],
      co:[0,0,0,0,0,0,0],
      no2:[0,0,0,0,0,0,0],
      so2:[0,0,0,0,0,0,0],
      AQI:0,
      timedata:[0,0,0,0,0,0,0],
      isCheckedPm25:false,
      graphpm25:false
    }
  }

  

  handleCheckedPM25 () {
    //this.setState({isCheckedPM25:true});
  }


  ColorPM25 = (props) =>{
    let colorpm25
    if(props > 0 & props <=25){
      colorpm25 = 'info'
    }
    else if(props > 25 & props <=37){
      colorpm25 = 'success'
    }
    else if(props > 37 & props <=50){
      colorpm25 = 'warning'
    }
    else if(props > 50 & props <=90){
      colorpm25 = 'awesome'
    }
    else if(props > 91){
      colorpm25 = 'danger'
    }
    return colorpm25
  }
  ColorPM10 = (props) =>{
    let colorpm10
    if(props > 0 & props <=50){
      colorpm10 = 'info'
    }
    else if(props > 50 & props <=80){
      colorpm10 = 'success'
    }
    else if(props > 80 & props <=120){
      colorpm10 = 'warning'
    }
    else if(props > 120 & props <= 180){
      colorpm10 = 'awesome'
    }
    else if(props > 180){
      colorpm10 = 'danger'
    }
    return colorpm10
  }
  ColorO3 = (props) =>{
    let coloro3
    if(props > 0 & props <=35){
      coloro3 = 'info'
    }
    else if(props > 35 & props <=50){
      coloro3 = 'success'
    }
    else if(props > 50 & props <70){
      coloro3 = 'warning'
    }
    else if(props > 70 & props <= 120){
      coloro3 = 'awesome'
    }
    else if(props > 120){
      coloro3 = 'danger'
    }
    return coloro3
  }
  ColorCO = (props) =>{
    let colorco
    if(props > 0 & props <=4.4){
      colorco = 'info'
    }
    else if(props > 4.4 & props <=6.4){
      colorco = 'success'
    }
    else if(props > 6.4 & props <9){
      colorco = 'warning'
    }
    else if(props > 9 & props <= 30){
      colorco = 'awesome'
    }
    else if(props > 30){
      colorco = 'danger'
    }
    return colorco
  }
  ColorNO2 = (props) =>{
    let colorno2
    if(props > 0 & props <= 60){
      colorno2 = 'info'
    }
    else if(props > 60 & props <= 106){
      colorno2 = 'success'
    }
    else if(props > 106 & props < 170){
      colorno2 = 'warning'
    }
    else if(props > 170 & props <= 340){
      colorno2 = 'awesome'
    }
    else if(props > 340){
      colorno2 = 'danger'
    }
    return colorno2
  }
  ColorSO2 = (props) =>{
    let colorso2
    if(props > 0 & props <= 100){
      colorso2 = 'info'
    }
    else if(props > 100 & props <= 200){
      colorso2 = 'success'
    }
    else if(props > 200 & props < 300){
      colorso2 = 'warning'
    }
    else if(props > 300 & props <= 400){
      colorso2 = 'awesome'
    }
    else if(props > 400){
      colorso2 = 'danger'
    }
    return colorso2
  }
  getdata = (props,location) =>{
    if(props === undefined){
      let urldata = 'http://54.169.105.27:1880/datanewest?deviceName='.concat(location)
      let urlaqi = 'http://54.169.105.27:1880/AQInewest?deviceName='.concat(location)
      let i
      axios.get(urldata)
      .then(response => {
        if(response.data.length !== 0){
          tem[0] = response.data[0].temperature
          if(response.data.length>=7){
              for(i=6;i>=0;i--){
              this.state.temperature.push(response.data[i].temperature) //change temp to pm25
              this.state.temperature.shift()
              this.state.humidity.push(response.data[i].humidity) //change temp to pm25
              this.state.humidity.shift()
              this.state.pressure.push(response.data[i].pressure) //change temp to pm25
              this.state.pressure.shift()
              this.state.pm25.push(response.data[i].PM25) //change temp to pm25
              this.state.pm25.shift()
              this.state.pm10.push(response.data[i].PM10) //change temp to pm10
              this.state.pm10.shift()
              this.state.o3.push(response.data[i].O3) //change temp to o3
              this.state.o3.shift()
              this.state.co.push(response.data[i].CO) //change temp to co
              this.state.co.shift()
              this.state.no2.push(response.data[i].NO2) //change temp to no2
              this.state.no2.shift()
              this.state.so2.push(response.data[i].SO2) //change temp to so2
              this.state.so2.shift()
              this.state.timedata.push(response.data[i].date.slice(11,16)) 
              this.state.timedata.shift()
          }
          }
          else{
              for(i=7-response.data.length;i>0;i--){
                this.state.temperature.push(0) //change temp to pm25
                this.state.temperature.shift()
                this.state.humidity.push(0) //change temp to pm25
                this.state.humidity.shift()
                this.state.pressure.push(0) //change temp to pm25
                this.state.pressure.shift()
                this.state.pm25.push(0) //change temp to pm25
                this.state.pm25.shift()
                this.state.pm10.push(0) //change temp to pm10
                this.state.pm10.shift()
                this.state.o3.push(0) //change temp to o3
                this.state.o3.shift()
                this.state.co.push(0) //change temp to co
                this.state.co.shift()
                this.state.no2.push(0) //change temp to no2
                this.state.no2.shift()
                this.state.so2.push(0) //change temp to so2
                this.state.so2.shift()
                this.state.timedata.push(0) 
                this.state.timedata.shift()
              }
              for(i=response.data.length-1;i>=0;i--){
                this.state.temperature.push(response.data[i].temperature) //change temp to pm25
                this.state.temperature.shift()
                this.state.humidity.push(response.data[i].humidity) //change temp to pm25
                this.state.humidity.shift()
                this.state.pressure.push(response.data[i].pressure) //change temp to pm25
                this.state.pressure.shift()
                this.state.pm25.push(response.data[i].PM25) //change temp to pm25
                this.state.pm25.shift()
                this.state.pm10.push(response.data[i].PM10) //change temp to pm10
                this.state.pm10.shift()
                this.state.o3.push(response.data[i].O3) //change temp to o3
                this.state.o3.shift()
                this.state.co.push(response.data[i].CO) //change temp to co
                this.state.co.shift()
                this.state.no2.push(response.data[i].NO2) //change temp to no2
                this.state.no2.shift()
                this.state.so2.push(response.data[i].SO2) //change temp to so2
                this.state.so2.shift()
                this.state.timedata.push(response.data[i].date.slice(11,16))
                this.state.timedata.shift()
              }
          }
        }
      })
      axios.get(urlaqi)
      .then(response => {
        if(response.data.length !== 0){
          if(response.data.length>=7){
              for(i=6;i>=0;i--){
              this.state.aqi.push(response.data[i].AQINOW)
              this.state.aqi.shift()
          }
          }
          else{
              for(i=7-response.data.length;i>0;i--){
                this.state.aqi.push(0)
                this.state.aqi.shift()
              }
              for(i=response.data.length-1;i>=0;i--){
                this.state.aqi.push(response.data[i].AQINOW)
                this.state.aqi.shift()
              }
          }
        }
      })
    }
    else if(props !== undefined){
      if(props.deviceName === location){
        this.state.temperature[0] = props.temp1
        this.state.temperature[1] = props.temp2
        this.state.temperature[2] = props.temp3
        this.state.temperature[3] = props.temp4
        this.state.temperature[4] = props.temp5
        this.state.temperature[5] = props.temp6
        this.state.temperature[6] = props.tempnow

        this.state.pressure[0] = props.air1
        this.state.pressure[1] = props.air2
        this.state.pressure[2] = props.air3
        this.state.pressure[3] = props.air4
        this.state.pressure[4] = props.air5
        this.state.pressure[5] = props.air6
        this.state.pressure[6] = props.airnow

        this.state.humidity[0] = props.hu1
        this.state.humidity[1] = props.hu2
        this.state.humidity[2] = props.hu3
        this.state.humidity[3] = props.hu4
        this.state.humidity[4] = props.hu5
        this.state.humidity[5] = props.hu6
        this.state.humidity[6] = props.hunow

        this.state.pm25[0] = props.pm251
        this.state.pm25[1] = props.pm252
        this.state.pm25[2] = props.pm253
        this.state.pm25[3] = props.pm254
        this.state.pm25[4] = props.pm255
        this.state.pm25[5] = props.pm256
        this.state.pm25[6] = props.pm25now

        this.state.pm10[0] = props.pm101
        this.state.pm10[1] = props.pm102
        this.state.pm10[2] = props.pm103
        this.state.pm10[3] = props.pm104
        this.state.pm10[4] = props.pm105
        this.state.pm10[5] = props.pm106
        this.state.pm10[6] = props.pm10now

        this.state.o3[0] = props.o31
        this.state.o3[1] = props.o32
        this.state.o3[2] = props.o33
        this.state.o3[3] = props.o34
        this.state.o3[4] = props.o35
        this.state.o3[5] = props.o36
        this.state.o3[6] = props.o3now

        this.state.co[0] = props.co1
        this.state.co[1] = props.co2
        this.state.co[2] = props.co3
        this.state.co[3] = props.co4
        this.state.co[4] = props.co5
        this.state.co[5] = props.co6
        this.state.co[6] = props.conow

        this.state.no2[0] = props.no21
        this.state.no2[1] = props.no22
        this.state.no2[2] = props.no23
        this.state.no2[3] = props.no24
        this.state.no2[4] = props.no25
        this.state.no2[5] = props.no26
        this.state.no2[6] = props.no2now

        this.state.so2[0] = props.so21
        this.state.so2[1] = props.so22
        this.state.so2[2] = props.so23
        this.state.so2[3] = props.so24
        this.state.so2[4] = props.so25
        this.state.so2[5] = props.so26
        this.state.so2[6] = props.so2now
        
        this.state.aqi[0] = props.aqi1
        this.state.aqi[1] = props.aqi2
        this.state.aqi[2] = props.aqi3
        this.state.aqi[3] = props.aqi4
        this.state.aqi[4] = props.aqi5
        this.state.aqi[5] = props.aqi6
        this.state.aqi[6] = props.AQINOW

        this.state.timedata[0] = props.timedata1.slice(11,16)
        this.state.timedata[1] = props.timedata2.slice(11,16)
        this.state.timedata[2] = props.timedata3.slice(11,16)
        this.state.timedata[3] = props.timedata4.slice(11,16)
        this.state.timedata[4] = props.timedata5.slice(11,16)
        this.state.timedata[5] = props.timedata6.slice(11,16)
        this.state.timedata[6] = props.timedata7.slice(11,16)
    }
    else{
      let urldata = 'http://54.169.105.27:1880/datanewest?deviceName='.concat(location)
      let urlaqi = 'http://54.169.105.27:1880/AQInewest?deviceName='.concat(location)
      let i
      axios.get(urldata)
      .then(response => {
        if(response.data.length !== 0){
          tem[0] = response.data[0].temperature
          if(response.data.length>=7){
              for(i=6;i>=0;i--){
              this.state.temperature.push(response.data[i].temperature) //change temp to pm25
              this.state.temperature.shift()
              this.state.humidity.push(response.data[i].humidity) //change temp to pm25
              this.state.humidity.shift()
              this.state.pressure.push(response.data[i].pressure) //change temp to pm25
              this.state.pressure.shift()
              this.state.pm25.push(response.data[i].PM25) //change temp to pm25
              this.state.pm25.shift()
              this.state.pm10.push(response.data[i].PM10) //change temp to pm10
              this.state.pm10.shift()
              this.state.o3.push(response.data[i].O3) //change temp to o3
              this.state.o3.shift()
              this.state.co.push(response.data[i].CO) //change temp to co
              this.state.co.shift()
              this.state.no2.push(response.data[i].NO2) //change temp to no2
              this.state.no2.shift()
              this.state.so2.push(response.data[i].SO2) //change temp to so2
              this.state.so2.shift()
              this.state.timedata.push(response.data[i].date.slice(11,16)) 
              this.state.timedata.shift()
          }
          }
          else{
              for(i=7-response.data.length;i>0;i--){
                this.state.temperature.push(0) //change temp to pm25
                this.state.temperature.shift()
                this.state.humidity.push(0) //change temp to pm25
                this.state.humidity.shift()
                this.state.pressure.push(0) //change temp to pm25
                this.state.pressure.shift()
                this.state.pm25.push(0) //change temp to pm25
                this.state.pm25.shift()
                this.state.pm10.push(0) //change temp to pm10
                this.state.pm10.shift()
                this.state.o3.push(0) //change temp to o3
                this.state.o3.shift()
                this.state.co.push(0) //change temp to co
                this.state.co.shift()
                this.state.no2.push(0) //change temp to no2
                this.state.no2.shift()
                this.state.so2.push(0) //change temp to so2
                this.state.so2.shift()
                this.state.timedata.push(0) 
                this.state.timedata.shift()
              }
              for(i=response.data.length-1;i>=0;i--){
                this.state.temperature.push(response.data[i].temperature) //change temp to pm25
                this.state.temperature.shift()
                this.state.humidity.push(response.data[i].humidity) //change temp to pm25
                this.state.humidity.shift()
                this.state.pressure.push(response.data[i].pressure) //change temp to pm25
                this.state.pressure.shift()
                this.state.pm25.push(response.data[i].PM25) //change temp to pm25
                this.state.pm25.shift()
                this.state.pm10.push(response.data[i].PM10) //change temp to pm10
                this.state.pm10.shift()
                this.state.o3.push(response.data[i].O3) //change temp to o3
                this.state.o3.shift()
                this.state.co.push(response.data[i].CO) //change temp to co
                this.state.co.shift()
                this.state.no2.push(response.data[i].NO2) //change temp to no2
                this.state.no2.shift()
                this.state.so2.push(response.data[i].SO2) //change temp to so2
                this.state.so2.shift()
                this.state.timedata.push(response.data[i].date.slice(11,16))
                this.state.timedata.shift()
              }
          }
        }
      })
      axios.get(urlaqi)
      .then(response => {
        if(response.data.length !== 0){
          if(response.data.length>=7){
              for(i=6;i>=0;i--){
              this.state.aqi.push(response.data[i].AQINOW)
              this.state.aqi.shift()
          }
          }
          else{
              for(i=7-response.data.length;i>0;i--){
                this.state.aqi.push(0)
                this.state.aqi.shift()
              }
              for(i=response.data.length-1;i>=0;i--){
                this.state.aqi.push(response.data[i].AQINOW)
                this.state.aqi.shift()
              }
          }
        }
      })
    }
    }
  }
  coloraqinow = (props)=>{
    let color
    if(props > 0 & props <=25){
      color = 'blue'
    }
    else if(props > 25 & props <=50){
      color = 'green'
    }
    else if(props > 50 & props <=100){
      color = 'yellow'
    }
    else if(props > 100 & props <=200){
      color = 'orange'
    }
    else if(props > 200){
      color = 'red'
    }
    return color
  }
  ColorGraphPM25 = (props) => {
    let colorpm25
    if(props > 0 & props <=25){
      colorpm25 = 'blue'
    }
    else if(props > 25 & props <=37){
      colorpm25 = 'green'
    }
    else if(props > 37 & props <=50){
      colorpm25 = 'yellow'
    }
    else if(props > 50 & props <=90){
      colorpm25 = 'orange'
    }
    else if(props > 91){
      colorpm25 = 'red'
    }
    return colorpm25
  }
  ColorGraphPM10 = (props)=>{
    let colorpm10
    if(props > 0 & props <=50){
      colorpm10 = 'blue'
    }
    else if(props > 50 & props <=80){
      colorpm10 = 'green'
    }
    else if(props > 80 & props <=120){
      colorpm10 = 'yellow'
    }
    else if(props > 120 & props <= 180){
      colorpm10 = 'orange'
    }
    else if(props > 180){
      colorpm10 = 'red'
    }
    return colorpm10
  }
  ColorGraphO3 = (props) =>{
    let coloro3
    if(props > 0 & props <=35){
      coloro3 = 'blue'
    }
    else if(props > 35 & props <=50){
      coloro3 = 'green'
    }
    else if(props > 50 & props <70){
      coloro3 = 'yellow'
    }
    else if(props > 70 & props <= 120){
      coloro3 = 'orange'
    }
    else if(props > 120){
      coloro3 = 'red'
    }
    return coloro3
  }
  ColorGraphCO = (props) =>{
    let colorco
    if(props > 0 & props <=4.4){
      colorco = 'blue'
    }
    else if(props > 4.4 & props <=6.4){
      colorco = 'green'
    }
    else if(props > 6.4 & props <9){
      colorco = 'yellow'
    }
    else if(props > 9 & props <= 30){
      colorco = 'orange'
    }
    else if(props > 30){
      colorco = 'red'
    }
    return colorco
  }
  ColorGraphNO2 = (props) =>{
    let colorno2
    if(props > 0 & props <= 60){
      colorno2 = 'blue'
    }
    else if(props > 60 & props <= 106){
      colorno2 = 'green'
    }
    else if(props > 106 & props < 170){
      colorno2 = 'yellow'
    }
    else if(props > 170 & props <= 340){
      colorno2 = 'orange'
    }
    else if(props > 340){
      colorno2 = 'red'
    }
    return colorno2
  }
  ColorGraphSO2 = (props)=>{
    let colorso2
    if(props > 0 & props <= 100){
      colorso2 = 'blue'
    }
    else if(props > 100 & props <= 200){
      colorso2 = 'green'
    }
    else if(props > 200 & props < 300){
      colorso2 = 'yellow'
    }
    else if(props > 300 & props <= 400){
      colorso2 = 'orange'
    }
    else if(props > 400){
      colorso2 = 'red'
    }
    return colorso2
  }
    render() {
      var txt = "textaqi"
      let pm25 = null
      if(this.state.isCheckedPM25){
        pm25 = <Col xs="12" sm="6" lg="6">
        <Card>
            <CardBody className="pb-0">
            <Line data={linepm25} options={sparklineChartOpts} width={680} height={250} />
            </CardBody> 
        </Card>
        </Col>
      }
      let show=null
      this.getdata(this.props.data.data[0],this.props.location)//location change num in array
      const graphpm25 = {
        labels:this.state.timedata,
        datasets:
        {
          label:['PM2.5'],
          backgroundColor: "#FF8C00",
          borderColor: "#FF8C00",
          data: [this.state.pm25[0],this.state.pm25[1],this.state.pm25[2],this.state.pm25[3],this.state.pm25[4],this.state.pm25[5],this.state.pm25[6]],
        }
      }
     
      const sparklineChartOpts = {
        tooltips: {
          enabled: true,
          custom: CustomTooltips
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              display: true,
            }],
          yAxes: [
            {
              lineHeight:1,
              display: true,
            }],
        },
        elements: {
          line: {
            borderWidth: 2,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
        legend: {
          display: true,
        },
      };

      const linepm25 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['PM2.5'],
          data: [this.state.pm25[0],this.state.pm25[1],this.state.pm25[2],this.state.pm25[3],this.state.pm25[4],this.state.pm25[5],this.state.pm25[6]],
          backgroundColor: "#FF8C00",
          borderColor: "#FF8C00",
        }]
      };
      const linepm10 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['PM10'],
          data: [this.state.pm10[0],this.state.pm10[1],this.state.pm10[2],this.state.pm10[3],this.state.pm10[4],this.state.pm10[5],this.state.pm10[6]],
          backgroundColor: "#FF9966",
          borderColor: "#FF9966",
        }]
      };
      const lineo3 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['O3'],
          data: [this.state.o3[0],this.state.o3[1],this.state.o3[2],this.state.o3[3],this.state.o3[4],this.state.o3[5],this.state.o3[6]],
          backgroundColor: "#FFCC66",
          borderColor: "#FFCC66",
        }]
      };
      const lineco = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['CO'],
          data: [this.state.co[0],this.state.co[1],this.state.co[2],this.state.co[3],this.state.co[4],this.state.co[5],this.state.co[6]],
          backgroundColor: "#FF6699",
          borderColor: "#FF6699",
        }]
      };
      const lineno2 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['CO'],
          data: [this.state.no2[0],this.state.no2[1],this.state.no2[2],this.state.no2[3],this.state.no2[4],this.state.no2[5],this.state.no2[6]],
          backgroundColor: "#FF99CC",
          borderColor: "#FF99CC",
        }]
      };
      const lineso2 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['CO'],
          data: [this.state.so2[0],this.state.so2[1],this.state.so2[2],this.state.so2[3],this.state.so2[4],this.state.so2[5],this.state.so2[6]],
          backgroundColor: "#FF6666",
          borderColor: "#FF6666",
        }]
      };
        const linetemp = {
            labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
            datasets: [{
              label:['temperature'],
              data: [this.state.temperature[0],this.state.temperature[1],this.state.temperature[2],this.state.temperature[3],this.state.temperature[4],this.state.temperature[5],this.state.temperature[6]],
              backgroundColor: [
                '#339999'
              ]
            }]
          };
          const linehu = {
            labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
            datasets: [{
              label:['humidity'],
              data: [this.state.humidity[0],this.state.humidity[1],this.state.humidity[2],this.state.humidity[3],this.state.humidity[4],this.state.humidity[5],this.state.humidity[6]],
              backgroundColor: [
                '#CC6666'
              ]
            }]
          };
          const lineair = {
            labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
            datasets: [{
              label:['air pressure'],
              data: [this.state.pressure[0],this.state.pressure[1],this.state.pressure[2],this.state.pressure[3],this.state.pressure[4],this.state.pressure[5],this.state.pressure[6]],
              backgroundColor: [
                '#ceae2d'
              ]
            }]
          };
          if(this.props.show){
            show = <div><br/>
            <Card>
              <CardHeader><strong>Pollution</strong></CardHeader>
              <CardBody className="pb-0">
              <Row>
              <Col xs="12" sm="6" lg="2">
              <p align="center"><strong className="pollution-txt">PM2.5 (ppb)</strong></p>
              <CircularProgressbar
                      className={this.ColorGraphPM25(this.state.pm25[6])}
                      background
                      percentage={this.state.pm25[6]*100/91}
                      text={this.state.pm25[6]} />
              </Col>
              <Col xs="12" sm="6" lg="2">
              <p align="center"><strong className="pollution-txt">PM10 (ppb)</strong></p>
              <CircularProgressbar
                      className={this.ColorGraphPM10(this.state.pm10[6])}
                      background
                      percentage={this.state.pm10[6]*100/181}
                      text={this.state.pm10[6]}/>
              </Col>
              <Col xs="12" sm="6" lg="2">
              <p align="center"><strong className="pollution-txt">O3 (ppb)</strong></p>
              <CircularProgressbar
                      className={this.ColorGraphNO2(this.state.o3[6])}
                      background
                      percentage={this.state.o3[6]*100/121}
                      text={this.state.o3[6]}/>
              </Col>
              <Col xs="12" sm="6" lg="2">
              <p align="center"><strong className="pollution-txt">CO (ppm)</strong></p>
              <CircularProgressbar
                      className={this.ColorGraphCO(this.state.co[6])}
                      background
                      percentage={this.state.co[6]*100/30.1}
                      text={this.state.co[6]}/>
              </Col>
              <Col xs="12" sm="6" lg="2">
              <p align="center"><strong className="pollution-txt">NO2 (ppb)</strong></p>
              <CircularProgressbar
                      className={this.ColorGraphNO2(this.state.no2[6])}
                      background
                      percentage={this.state.no2[6]*100/341}
                      text={this.state.no2[6]}/>
              </Col>
              <Col xs="12" sm="6" lg="2">
              <p align="center"><strong className="pollution-txt">SO2 (ppb)</strong></p>
              <CircularProgressbar
                      className={this.ColorGraphSO2(this.state.so2[6])}
                      background
                      percentage={this.state.so2[6]*100/401}
                      text={this.state.so2[6]}/>
              </Col>
              </Row>
              <Selectgraph timedata={this.state.timedata} pm25={this.state.pm25} pm10={this.state.pm10} o3={this.state.o3}
                           co={this.state.co} no2={this.state.no2} so2={this.state.so2}/>
                  <br/>
            </CardBody>
            </Card>
               <Row >
                <Col xs="12" sm="6" lg="4">
                <Card className="bg-color3">
                    <CardBody className="pb-0">
                    <Col xs="12" sm="6" lg="3">
                    </Col>
                        <div className="text-value">{this.state.temperature[6]} °C</div>
                        <div className="text-value">Temperature</div>
                        <Line data={linetemp}
                              height={160}/>
                    </CardBody> 
                </Card>
                </Col>
                <Col xs="12" sm="6" lg="4">
                <Card className="bg-color1">
                    <CardBody className="pb-0">
                        <div className="text-value">{this.state.humidity[6]} %</div>
                        <div className="text-value">Humidity</div>
                        <Line data={linehu}
                              height={160}/>
                    </CardBody> 
                </Card>
                </Col>
                <Col xs="12" sm="6" lg="4">
                <Card className="bg-color2">
                    <CardBody className="pb-0">
                        <div className="text-value">{this.state.pressure[6]} hPa</div>
                        <div className="text-value">Air pressure</div>
                        <Line data={lineair}
                              height={160}/>
                    </CardBody> 
                </Card>
                </Col>
            </Row>
            
            <br/>
            </div>
          }
        return (
          <div className="animated fadeIn">
           {show}
          </div>
        );
      }
}

export default DashboardShow
