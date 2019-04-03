import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Progress,
  CardHeader,
  Table,
  Badge
} from 'reactstrap';
import './Colors.css'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Custom.css';
import axios from 'axios'

class Showpredict extends Component {
  static defaultProps = {
    center: {
      lat: 13.72,
      lng: 100.785
    },
    zoom: 11
  };
  constructor(props){
    super(props);
    this.state = {
      timepredict24:['06:0','09:0','12:0','15:0','18:0'],
      predict24:[0,0,0,0,0],
      aqi:[0,0,0,0,0,0,0],
      timeaqi:[0,0,0,0,0,0,0],
      timedata:[0,0,0,0,0,0,0],
      pm25:[0,0,0,0,0,0,0],
      pm10:[0,0,0,0,0,0,0],
      o3:[0,0,0,0,0,0,0],
      co:[0,0,0,0,0,0,0],
      no2:[0,0,0,0,0,0,0],
      so2:[0,0,0,0,0,0,0],
      datepredict1:[],
      time:[],
      predict1hr:undefined,
      time1hr:undefined,
      predict24hr:undefined,
      time24hr:undefined,
      predict24hr:[],
      showAQI:true,
      showPM25:false,
      showPM10:false,
      showCO:false,
      showO3:false,
      showNO2:false,
      showSO2:false,
      location:'',
      locationName:[],
      locationID:[]
    }
  }
showaqi = () => {
  this.setState({showAQI:true});
  this.setState({showPM25:false});
  this.setState({showPM10:false});
  this.setState({showCO:false});
  this.setState({showO3:false});
  this.setState({showNO2:false});
  this.setState({showSO2:false});
}
showpm25 = () => {
  this.setState({showAQI:false});
  this.setState({showPM25:true});
  this.setState({showPM10:false});
  this.setState({showCO:false});
  this.setState({showO3:false});
  this.setState({showNO2:false});
  this.setState({showSO2:false});
}
showpm10 = () => {
  this.setState({showAQI:false});
  this.setState({showPM25:false});
  this.setState({showPM10:true});
  this.setState({showCO:false});
  this.setState({showO3:false});
  this.setState({showNO2:false});
  this.setState({showSO2:false});
}
showco = () => {
  this.setState({showAQI:false});
  this.setState({showPM25:false});
  this.setState({showPM10:false});
  this.setState({showCO:true});
  this.setState({showO3:false});
  this.setState({showNO2:false});
  this.setState({showSO2:false});
}
showo3 = () => {
  this.setState({showAQI:false});
  this.setState({showPM25:false});
  this.setState({showPM10:false});
  this.setState({showCO:false});
  this.setState({showO3:true});
  this.setState({showNO2:false});
  this.setState({showSO2:false});
}
showno2 = () => {
  this.setState({showAQI:false});
  this.setState({showPM25:false});
  this.setState({showPM10:false});
  this.setState({showCO:false});
  this.setState({showO3:false});
  this.setState({showNO2:true});
  this.setState({showSO2:false});
}
showso2 = () => {
  this.setState({showAQI:false});
  this.setState({showPM25:false});
  this.setState({showPM10:false});
  this.setState({showCO:false});
  this.setState({showO3:false});
  this.setState({showNO2:false});
  this.setState({showSO2:true});
}
ColorGraphaqi(props){
  let color
  if(props >= 0 & props <=25){
    color = '#00BFFF'
  }
  else if(props > 25 & props <=50){
    color = '#66CC66'
  }
  else if(props > 50 & props <=100){
    color = '#FFCC33'
  }
  else if(props > 100 & props <=200){
    color = '#FF9933'
  }
  else if(props > 200){
    color = '#FF0033'
  }
  return color
}
ColorGraphPM25 = (props) => {
  let colorpm25
  if(props > 0 & props <=25){
    colorpm25 = '#00BFFF'
  }
  else if(props > 25 & props <=37){
    colorpm25 = '#66CC66'
  }
  else if(props > 37 & props <=50){
    colorpm25 = '#FFCC33'
  }
  else if(props > 50 & props <=90){
    colorpm25 = '#FF9933'
  }
  else if(props > 91){
    colorpm25 = '#FF0033'
  }
  return colorpm25
}
ColorGraphPM10 = (props)=>{
  let colorpm10
  if(props > 0 & props <=50){
    colorpm10 = '#00BFFF'
  }
  else if(props > 50 & props <=80){
    colorpm10 = '#66CC66'
  }
  else if(props > 80 & props <=120){
    colorpm10 = '#FFCC33'
  }
  else if(props > 120 & props <= 180){
    colorpm10 = '#FF9933'
  }
  else if(props > 180){
    colorpm10 = '#FF0033'
  }
  return colorpm10
}
ColorGraphO3 = (props) =>{
  let coloro3
  if(props > 0 & props <=35){
    coloro3 = '#00BFFF'
  }
  else if(props > 35 & props <=50){
    coloro3 = '#66CC66'
  }
  else if(props > 50 & props <70){
    coloro3 = '#FFCC33'
  }
  else if(props > 70 & props <= 120){
    coloro3 = '#FF9933'
  }
  else if(props > 120){
    coloro3 = '#FF0033'
  }
  return coloro3
}
ColorGraphCO = (props) =>{
  let colorco
  if(props > 0 & props <=4.4){
    colorco = '#00BFFF'
  }
  else if(props > 4.4 & props <=6.4){
    colorco = '#66CC66'
  }
  else if(props > 6.4 & props <9){
    colorco = '#FFCC33'
  }
  else if(props > 9 & props <= 30){
    colorco = '#FF9933'
  }
  else if(props > 30){
    colorco = '#FF0033'
  }
  return colorco
}
ColorGraphNO2 = (props) =>{
  let colorno2
  if(props > 0 & props <= 60){
    colorno2 = '#00BFFF'
  }
  else if(props > 60 & props <= 106){
    colorno2 = '#66CC66'
  }
  else if(props > 106 & props < 170){
    colorno2 = '#FFCC33'
  }
  else if(props > 170 & props <= 340){
    colorno2 = '#FF9933'
  }
  else if(props > 340){
    colorno2 = '#FF0033'
  }
  return colorno2
}
ColorGraphSO2 = (props)=>{
  let colorso2
  if(props > 0 & props <= 100){
    colorso2 = '#00BFFF'
  }
  else if(props > 100 & props <= 200){
    colorso2 = '#66CC66'
  }
  else if(props > 200 & props < 300){
    colorso2 = '#FFCC33'
  }
  else if(props > 300 & props <= 400){
    colorso2 = '#FF9933'
  }
  else if(props > 400){
    colorso2 = '#FF0033'
  }
  return colorso2
}
coloraqinow = (props)=>{
  let color
  if(props >= 0 & props <=25){
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
txtaqinow = (props) =>{
  let txt
  if(props >= 0 & props <=25){
    txt = 'Very good'
  }
  else if(props > 25 & props <=50){
    txt = 'Good'
  }
  else if(props > 50 & props <=100){
    txt = 'Moderate'
  }
  else if(props > 100 & props <=200){
    txt = 'Unhealthy for Sensitive Groups'
  }
  else if(props > 200){
    txt = 'Unhealthy'
  }
  return txt
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
txtPredict1hr = (props) =>{
  let txt
  if(props === 1){
    txt = 'Very good'
  }
  else if(props ===2){
    txt = 'Good'
  }
  else if(props ===3){
    txt = 'Moderate'
  }
  else if(props ===4){
    txt = 'Unhealthy for Sensitive Groups'
  }
  else if(props ===5){
    txt = 'Unhealthy'
  }
  return txt
}
txtRangePredict1hr = (props) =>{
  let txt
  if(props === 1){
    txt = '0-25'
  }
  else if(props ===2){
    txt = '26-50'
  }
  else if(props ===3){
    txt = '51-100'
  }
  else if(props ===4){
    txt = '101-150'
  }
  else if(props ===5){
    txt = '>150'
  }
  return txt
}



handleLocationChange = () => {
  let selectedValue = document.getElementById("location").value;
  this.setState({location:selectedValue})
}


getdata = (props,location) =>{
  console.log("getdata: ",props)
  if(props === undefined){
    let urldata = 'http://54.169.105.27:1880/datanewest?deviceName='.concat(location)
    let urlaqi = 'http://54.169.105.27:1880/AQInewest?deviceName='.concat(location)
    let i
    axios.get(urldata)
    .then(response => {
      if(response.data.length !== 0){
        if(response.data.length>=7){
            for(i=6;i>=0;i--){
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
            this.state.timedata.push(response.data[i].date.slice(11,16)) //change temp to so2
            this.state.timedata.shift()
        }
        }
        else{
            for(i=7-response.data.length;i>0;i--){
              this.state.pm25.push(0) 
              this.state.pm25.shift()
              this.state.pm10.push(0) 
              this.state.pm10.shift()
              this.state.o3.push(0) 
              this.state.o3.shift()
              this.state.co.push(0) 
              this.state.co.shift()
              this.state.no2.push(0)
              this.state.no2.shift()
              this.state.so2.push(0)
              this.state.so2.shift()
              this.state.timedata.push(0) 
              this.state.timedata.shift()
            }
            for(i=response.data.length-1;i>=0;i--){
              this.state.pm25.push(response.data[i].PM25)
              this.state.pm25.shift()
              this.state.pm10.push(response.data[i].PM10)
              this.state.pm10.shift()
              this.state.o3.push(response.data[i].O3)
              this.state.o3.shift()
              this.state.co.push(response.data[i].CO)
              this.state.co.shift()
              this.state.no2.push(response.data[i].NO2)
              this.state.no2.shift()
              this.state.so2.push(response.data[i].SO2)
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
        for(i=response.data.length-1;i>=0;i--){
          if(response.data[i].time.slice(11,15) === this.state.timepredict24[0]){
            this.state.predict24[0] = response.data[i].AQI24HR
          }
          else if(response.data[i].time.slice(11,15) === this.state.timepredict24[1]){
            this.state.predict24[1] = response.data[i].AQI24HR
          }
          else if(response.data[i].time.slice(11,15) === this.state.timepredict24[2]){
            this.state.predict24[2] = response.data[i].AQI24HR
          }
          else if(response.data[i].time.slice(11,15) === this.state.timepredict24[3]){
            this.state.predict24[3] = response.data[i].AQI24HR
          }
          else if(response.data[i].time.slice(11,15) === this.state.timepredict24[4]){
            this.state.predict24[4] = response.data[i].AQI24HR
          }
        }
        this.state.predict1hr=response.data[0].AQI1HR
        this.state.predict24hr=response.data[0].AQI24HR
        this.state.time24hr=response.data[0].time.slice(11,16)
        this.state.time1hr=String(Number(response.data[0].time.slice(11,13))+1).concat(response.data[0].time.slice(13,16))
        if(String(Number(response.data[0].time.slice(11,13))+1) === '24'){
          this.state.time1hr='00'.concat(response.data[0].time.slice(13,16))
        }
        if(response.data.length>=7){
            for(i=6;i>=0;i--){
            this.state.aqi.push(response.data[i].AQINOW)
            this.state.aqi.shift()
            this.state.timeaqi.push(response.data[i].time.slice(11,16))
            this.state.timeaqi.shift()
        }
        }
        else{
            for(i=7-response.data.length;i>0;i--){
              this.state.aqi.push(0)
              this.state.aqi.shift()
              this.state.timeaqi.push(0)
              this.state.timeaqi.shift()
            }
            for(i=response.data.length-1;i>=0;i--){
              this.state.aqi.push(response.data[i].AQINOW)
              this.state.aqi.shift()
              this.state.timeaqi.push(response.data[i].time.slice(11,16))
              this.state.timeaqi.shift()
            }
        }
        
      }
    })

  }
  else if(props !== undefined){
    if(props.deviceName === location){
      if(props.timenow.slice(11,15) === this.state.timepredict24[0]){
        this.state.predict24[0] = props.timenow.AQI24HR
      }
      else if(props.timenow.slice(11,15) === this.state.timepredict24[1]){
        this.state.predict24[1] = props.timenow.AQI24HR
      }
      else if(props.timenow.slice(11,15) === this.state.timepredict24[2]){
        this.state.predict24[2] = props.timenow.AQI24HR
      }
      else if(props.timenow.slice(11,15) === this.state.timepredict24[3]){
        this.state.predict24[3] = props.timenow.AQI24HR
      }
      else if(props.timenow.slice(11,15) === this.state.timepredict24[4]){
        this.state.predict24[4] = props.timenow.AQI24HR
      }
      this.state.predict1hr=props.AQI1hrNOW
      this.state.predict24hr=props.AQI24hrNOW
      this.state.time24hr=props.timenow.slice(11,16)
      this.state.time1hr=String(Number(props.timenow.slice(11,13))+1).concat(props.timenow.slice(13,16))
      if(String(Number(props.timenow.slice(11,13))+1) === '24'){
        this.statetime1hr='00'.concat(props.timenow.slice(13,16))
      }
      this.state.aqi[6] = props.aqi1
      this.state.aqi[5] = props.aqi2
      this.state.aqi[4] = props.aqi3
      this.state.aqi[3] = props.aqi4
      this.state.aqi[2] = props.aqi5
      this.state.aqi[1] = props.aqi6
      this.state.aqi[0] = props.aqinow

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

      this.state.timeaqi[0] = props.timeaqi6.slice(11,16)
      this.state.timeaqi[1] = props.timeaqi5.slice(11,16)
      this.state.timeaqi[2] = props.timeaqi4.slice(11,16)
      this.state.timeaqi[3] = props.timeaqi3.slice(11,16)
      this.state.timeaqi[4] = props.timeaqi2.slice(11,16)
      this.state.timeaqi[5] = props.timeaqi1.slice(11,16)
      this.state.timeaqi[6] = props.timenow.slice(11,16)

      this.state.timedata[0] = props.timedata1.slice(11,16)
      this.state.timedata[1] = props.timedata2.slice(11,16)
      this.state.timedata[2] = props.timedata3.slice(11,16)
      this.state.timedata[3] = props.timedata4.slice(11,16)
      this.state.timedata[4] = props.timedata5.slice(11,16)
      this.state.timedata[5] = props.timedata6.slice(11,16)
      this.state.timedata[6] = props.timedata7.slice(11,16)
      
    }
    else{
      console.log(props.deviceName)
    }
  }
}
settext=(props)=>{
  if(props === 201){
    return '>201'
  }
  else{
    return String(props)
  }
}
  render() {
    this.getdata(this.props.data.data[0],this.props.location)
    var txt = "textaqi"
    let txtaqi = null
    let showdata=null;
    const dataaqi = {
      labels:[this.state.timeaqi[0],this.state.timeaqi[1],this.state.timeaqi[2],this.state.timeaqi[3],this.state.timeaqi[4],this.state.timeaqi[5],this.state.timeaqi[6]],  
        datasets: [{
          label:['AQI'],
          data: [this.state.aqi[0],this.state.aqi[1],this.state.aqi[2],this.state.aqi[3],this.state.aqi[4],this.state.aqi[5],this.state.aqi[6]],
          backgroundColor: [
            this.ColorGraphaqi(this.state.aqi[0]),this.ColorGraphaqi(this.state.aqi[1]),this.ColorGraphaqi(this.state.aqi[2]),this.ColorGraphaqi(this.state.aqi[3]),
            this.ColorGraphaqi(this.state.aqi[4]),this.ColorGraphaqi(this.state.aqi[5]),this.ColorGraphaqi(this.state.aqi[6])
          ]
        }]
      };
    const datapm25 = {
      labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['PM2.5'],
          data: [this.state.pm25[0],this.state.pm25[1],this.state.pm25[2],this.state.pm25[3],this.state.pm25[4],this.state.pm25[5],this.state.pm25[6]],
          backgroundColor: [
            this.ColorGraphPM25(this.state.pm25[0]),this.ColorGraphPM25(this.state.pm25[1]),this.ColorGraphPM25(this.state.pm25[2]),this.ColorGraphPM25(this.state.pm25[3]),
            this.ColorGraphPM25(this.state.pm25[4]),this.ColorGraphPM25(this.state.pm25[5]),this.ColorGraphPM25(this.state.pm25[6])
          ]
        }]
      };
    const datapm10 = {
      labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['PM10'],
          data: [this.state.pm10[0],this.state.pm10[1],this.state.pm10[2],this.state.pm10[3],this.state.pm10[4],this.state.pm10[5],this.state.pm10[6]],
          backgroundColor: [
            this.ColorGraphPM10(this.state.pm10[0]),this.ColorGraphPM10(this.state.pm10[1]),this.ColorGraphPM10(this.state.pm10[2]),this.ColorGraphPM10(this.state.pm10[3]),
            this.ColorGraphPM10(this.state.pm10[4]),this.ColorGraphPM10(this.state.pm10[5]),this.ColorGraphPM10(this.state.pm10[6])
          ]
        }]
      };
      const dataco = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['CO'],
          data: [this.state.co[0],this.state.co[1],this.state.co[2],this.state.co[3],this.state.co[4],this.state.co[5],this.state.co[6]],
          backgroundColor: [
            this.ColorGraphCO(this.state.co[0]),this.ColorGraphCO(this.state.co[1]),this.ColorGraphCO(this.state.co[2]),this.ColorGraphCO(this.state.co[3]),
            this.ColorGraphCO(this.state.co[4]),this.ColorGraphCO(this.state.co[5]),this.ColorGraphCO(this.state.co[6])
          ]
        }]
      };
      const datao3 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['O3'],
          data: [this.state.o3[0],this.state.o3[1],this.state.o3[2],this.state.o3[3],this.state.o3[4],this.state.o3[5],this.state.o3[6]],
          backgroundColor: [
            this.ColorGraphO3(this.state.o3[0]),this.ColorGraphO3(this.state.o3[1]),this.ColorGraphO3(this.state.o3[2]),this.ColorGraphO3(this.state.o3[3]),
            this.ColorGraphO3(this.state.o3[4]),this.ColorGraphO3(this.state.o3[5]),this.ColorGraphO3(this.state.o3[6])
          ]
        }]
      };
      const datano2 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['NO2'],
          data: [this.state.no2[0],this.state.no2[1],this.state.no2[2],this.state.no2[3],this.state.no2[4],this.state.no2[5],this.state.no2[6]],
          backgroundColor: [
            this.ColorGraphNO2(this.state.no2[0]),this.ColorGraphNO2(this.state.no2[1]),this.ColorGraphNO2(this.state.no2[2]),this.ColorGraphNO2(this.state.no2[3]),
            this.ColorGraphNO2(this.state.no2[4]),this.ColorGraphNO2(this.state.no2[5]),this.ColorGraphNO2(this.state.no2[6])
          ]
        }]
      };
      const dataso2 = {
        labels:[this.state.timedata[0],this.state.timedata[1],this.state.timedata[2],this.state.timedata[3],this.state.timedata[4],this.state.timedata[5],this.state.timedata[6]],  
        datasets: [{
          label:['SO2'],
          data: [this.state.so2[0],this.state.so2[1],this.state.so2[2],this.state.so2[3],this.state.so2[4],this.state.so2[5],this.state.so2[6]],
          backgroundColor: [
            this.ColorGraphSO2(this.state.so2[0]),this.ColorGraphSO2(this.state.so2[1]),this.ColorGraphSO2(this.state.so2[2]),this.ColorGraphSO2(this.state.so2[3]),
            this.ColorGraphSO2(this.state.so2[4]),this.ColorGraphSO2(this.state.so2[5]),this.ColorGraphSO2(this.state.so2[6])
          ]
        }]
      };
    if(this.state.showAQI){
        showdata=<Bar data={dataaqi}
                      height={190}/>
    }
    else if(this.state.showPM25){
        showdata=<Bar data={datapm25}
                    height={190}/>
    }
    else if(this.state.showPM10){
      showdata=<Bar data={datapm10}
                  height={190}/>
    }
    else if(this.state.showCO){
      showdata=<Bar data={dataco}
                height={190}/>
    }
    else if(this.state.showO3){
      showdata=<Bar data={datao3}
                height={190}/>
    }
    else if(this.state.showNO2){
      showdata=<Bar data={datano2}
                height={190}/>
    }
    else if(this.state.showSO2){
      showdata=<Bar data={dataso2}
                height={190}/>
    }
    txtaqi =  this.settext(this.state.aqi[6])
    return (
      <div className="animated fadeIn">
      <Row>
          <Col xs="12" sm="6" lg="5">
            <Card ><CardBody className="pb-0">
              <Row>
                <Col xs="12" sm="6" lg="2"></Col>
                <Col xs="12" sm="6" lg="8">
                <Col xs="12" sm="6" lg="10">
                <strong className={txt.concat(this.coloraqinow(this.state.aqi[6]))}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air Quality Index</strong>
                </Col>
                <CircularProgressbar
                    className={this.coloraqinow(this.state.aqi[6])}
                    background
                    percentage={this.state.aqi[6]*100/201}
                    text={txtaqi}/>
                <Row>
                  <Col xs="12" sm="6" lg="4">
                  </Col>
                <strong className={txt.concat(this.coloraqinow(this.state.aqi[6]))}>{this.txtaqinow(this.state.aqi[6])}</strong>
                </Row>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col xs="12" sm="6" lg="6">
                <div className="clearfix">
                        <div className="float-left">
                          <strong>PM2.5</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">{this.state.pm25[6]}</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color={this.ColorPM25(this.state.pm25[6])} value={this.state.pm25[6]*100/91} />
                </Col>
                <Col xs="12" sm="6" lg="6">
                <div className="clearfix">
                        <div className="float-left">
                          <strong>PM10</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">{this.state.pm10[6]}</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color={this.ColorPM10(this.state.pm10[6])} value={this.state.pm10[6]*100/181} />
                </Col>
              </Row><br/>
              <Row>
                <Col xs="12" sm="6" lg="6">
                <div className="clearfix">
                        <div className="float-left">
                          <strong>O3</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">{this.state.o3[6]}</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color={this.ColorO3([this.state.o3[6]])} value={this.state.o3[6]*100/121} />
                </Col>
                <Col xs="12" sm="6" lg="6">
                <div className="clearfix">
                        <div className="float-left">
                          <strong>CO</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">{this.state.co[6]}</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color={this.ColorCO(this.state.co[6])} value={this.state.co[6]*100/30.1}/>
                </Col>
              </Row><br/>
              <Row>
                <Col xs="12" sm="6" lg="6">
                <div className="clearfix">
                        <div className="float-left">
                          <strong>NO2</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">{this.state.no2[6]}</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color={this.ColorNO2(this.state.no2[6])} value={this.state.no2[6]*100/341} />
                </Col>
                <Col xs="12" sm="6" lg="6">
                <div className="clearfix">
                        <div className="float-left">
                          <strong>SO2</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">{this.state.so2[6]}</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color={this.ColorSO2(this.state.so2[6])} value={this.state.so2[6]*100/401} />
                </Col>
              </Row><br/>
              <Col xs="12" sm="6" lg="3"></Col>
              </CardBody></Card>
        </Col>
      <Col xs="12" sm="6" lg="7">
      <Card className="bg">
      <CardBody className="pb-0">
        {showdata}
        <Row>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showaqi}>AQI</Button>
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showpm25}>PM2.5</Button>
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showpm10}>PM10</Button>
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showco}>CO</Button>
              </Col>
        </Row>
        <Row><Col xs="12" sm="6" lg="3"><div><h3></h3></div></Col></Row>
        <Row>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showo3}>O3</Button>
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showno2}>NO2</Button>
              </Col>
              <Col xs="12" sm="6" lg="3">
                <Button active block color="primary" aria-pressed="true" onClick={this.showso2}>SO2</Button>
              </Col>
        </Row>
        <Row>
        <Col xs="12" sm="6" lg="3"><h1></h1></Col>
        </Row>
      </CardBody>
      </Card>
      </Col>
      </Row>
      <Row>
      <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <strong>Prediction</strong>
              </CardHeader>
              <Col xs="12" lg="12">
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Time</th>
                    <th>AQI</th>
                    <th><center>Status</center></th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>TODAY {this.state.time1hr}</td>
                    <td>{this.txtRangePredict1hr(this.state.predict1hr)}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict1hr)}>{this.txtPredict1hr(this.state.predict1hr)}</Badge></center>
                    </td>
                    </tr>
                    <tr>
                    <td>Tomorrow {this.state.time24hr}</td>
                    <td>{this.txtRangePredict1hr(this.state.predict24hr)}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict24hr)}>{this.txtPredict1hr(this.state.predict24hr)}</Badge></center>
                    </td>
                    </tr>

                    <tr>
                    <td>Tomorrow {this.state.timepredict24[0]}0</td>
                    <td>{this.txtRangePredict1hr(this.state.predict24[0])}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict24[0])}>{this.txtPredict1hr(this.state.predict24[0])}</Badge></center>
                    </td>
                    </tr>
                    <tr>
                    <td>Tomorrow {this.state.timepredict24[1]}0</td>
                    <td>{this.txtRangePredict1hr(this.state.predict24[1])}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict24[1])}>{this.txtPredict1hr(this.state.predict24[1])}</Badge></center>
                    </td>
                    </tr>
                    <tr>
                    <td>Tomorrow {this.state.timepredict24[2]}0</td>
                    <td>{this.txtRangePredict1hr(this.state.predict24[2])}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict24[2])}>{this.txtPredict1hr(this.state.predict24[2])}</Badge></center>
                    </td>
                    </tr>
                    <tr>
                    <td>Tomorrow {this.state.timepredict24[3]}0</td>
                    <td>{this.txtRangePredict1hr(this.state.predict24[3])}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict24[3])}>{this.txtPredict1hr(this.state.predict24[3])}</Badge></center>
                    </td>
                    </tr>
                    <tr>
                    <td>Tomorrow {this.state.timepredict24[4]}0</td>
                    <td>{this.txtRangePredict1hr(this.state.predict24[4])}</td>
                    <td>
                      <center><Badge className={"bg-aqi".concat(this.state.predict24[4])}>{this.txtPredict1hr(this.state.predict24[4])}</Badge></center>
                    </td>
                    </tr>

                  </tbody>
                </Table>
              </CardBody>
              </Col>
            </Card>
          </Col>
      </Row>
      </div>
    );
  }
}

export default Showpredict;

