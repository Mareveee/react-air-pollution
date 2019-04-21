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

const brandPrimary = getStyle('--primary')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
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
      AQI:0
    }
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
    else{
      color = '#00BFFF'
    }
    return color
  }
    render() {
      let show=null
      this.getdata(this.props.data.data[0],this.props.location)//location change num in array
      const sparkLineChartData = [
        {
          data: [this.state.pm25[0],this.state.pm25[1],this.state.pm25[2],this.state.pm25[3],this.state.pm25[4],this.state.pm25[5],this.state.pm25[6]],
          label: 'PM2.5',
        },
        {
          data: [this.state.co[0],this.state.co[1],this.state.co[2],this.state.co[3],this.state.co[4],this.state.co[5],this.state.co[6]],
          label: 'CO',
        },
        {
          data: [this.state.no2[0],this.state.no2[1],this.state.no2[2],this.state.no2[3],this.state.no2[4],this.state.no2[5],this.state.no2[6]],
          label: 'NO2',
        },
        {
          data: [this.state.pm10[0], this.state.pm10[1], this.state.pm10[2], this.state.pm10[3], this.state.pm10[4], this.state.pm10[5], this.state.pm10[6]],
          label: 'PM10',
        },
        {
          data: [this.state.o3[0],this.state.o3[1],this.state.o3[2],this.state.o3[3],this.state.o3[4],this.state.o3[5],this.state.o3[6]],
          label: 'O3',
        },
        {
          data: [this.state.so2[0], this.state.so2[1],this.state.so2[2],this.state.so2[3],this.state.so2[4],this.state.so2[5],this.state.so2[6]],
          label: 'SO2',
        }
      ];
      
      const sparklineChartOpts = {
        tooltips: {
          enabled: false,
          custom: CustomTooltips
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              display: false,
            }],
          yAxes: [
            {
              display: false,
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
          display: false,
        },
      };
      const makeSparkLineData = (dataSetNo, variant) => {
        const dataset = sparkLineChartData[dataSetNo]
        const data = {
          labels: ['1', '2', '3', '4', '5','6','7'],
          datasets: [
            {
              backgroundColor: 'transparent',
              borderColor: variant ? variant : '#c2cfd6',
              data: dataset.data,
              label: dataset.label,
            },
          ],

        };
        
        return () => data;
      };
        const linetemp = {
            labels:['1','2','3','4','5','6','7'],  
            datasets: [{
              label:['temperature'],
              data: [this.state.temperature[0],this.state.temperature[1],this.state.temperature[2],this.state.temperature[3],this.state.temperature[4],this.state.temperature[5],this.state.temperature[6]],
              backgroundColor: [
                '#339999'
              ]
            }]
          };
          const linehu = {
            labels:['1','2','3','4','5','6','7'],  
            datasets: [{
              label:['humidity'],
              data: [this.state.humidity[0],this.state.humidity[1],this.state.humidity[2],this.state.humidity[3],this.state.humidity[4],this.state.humidity[5],this.state.humidity[6]],
              backgroundColor: [
                '#CC6666'
              ]
            }]
          };
          const lineair = {
            labels:['1','2','3','4','5','6','7'],  
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
            <Row>
              <Col xs="12" md="6" xl="12">
            <Card>
            <CardHeader>
               <strong> Pollution </strong>
              </CardHeader>
            <CardBody>
                <Row>
            <Col xs="12" md="6" xl="5"></Col>
            <Col xs="12" md="6" xl="11">
            <Row>
            <Col xs="12" md="6" xl="4">
                        <div className="callout callout-info">
                          <small className="text-muted"><strong>Dust PM2.5</strong></small>
                          <br />
                          <strong className="h4">{this.state.pm25[6]} ppb</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12" md="6" xl="4">
                        <div className="callout callout-danger">
                          <small className="text-muted"><strong>Carbonmonoxide</strong></small>
                          <br />
                          <strong className="h4">{this.state.co[6]} ppm</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12" md="6" xl="4">
                        <div className="callout callout-warning">
                          <small className="text-muted"><strong>Nitrogendioxide</strong></small>
                          <br />
                          <strong className="h4">{this.state.no2[6]} ppb</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12" md="6" xl="4">
                        <div className="callout callout-info">
                          <small className="text-muted"><strong>Dust PM10</strong></small>
                          <br />
                          <strong className="h4">{this.state.pm10[6]} ppb</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(3, brandInfo)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12" md="6" xl="4">
                        <div className="callout callout-danger">
                          <small className="text-muted"><strong>OZone</strong></small>
                          <br />
                          <strong className="h4">{this.state.o3[6]} ppb</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(4, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12" md="6" xl="4">
                        <div className="callout callout-warning">
                          <small className="text-muted"><strong>Sulferdioxide</strong></small>
                          <br />
                          <strong className="h4">{this.state.so2[6]} ppb</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(5, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  </Row>
                  </CardBody>
                </Card>
                </Col>
            </Row>
        {/*<Maps AQI={this.coloraqinow(this.state.aqi[6])}/>*/} 
            <Row>
              
            </Row>
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
