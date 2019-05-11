import React from 'react'
import {Line} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';
class Graphdata extends React.Component{
  constructor(){
    super()
    this.state ={
      data:[],
      temp:null,
      hu:null,
      air:null,
      pm10:null,
      pm25:null,
      o3:null,
      co:null,
      no2:null,
      so2:null,
      aqi:null
    }
  }
  componentWillMount(){
    this.setState({temp:{
      label:['temperature'],
      backgroundColor: 'transparent',
      borderColor: "#FF6666" ? "#FF6666" : '#c2cfd6',
      data: this.props.temp
    }})
    this.setState({hu:{
      label:['humidity'],
      backgroundColor: 'transparent',
      borderColor: "#FFCC33" ? "#FFCC33" : '#c2cfd6',
      data: this.props.hu
    }})
    this.setState({air:{
      label:['pressure'],
      backgroundColor: 'transparent',
      borderColor: "#2F4F4F" ? "#2F4F4F" : '#c2cfd6',
      data: this.props.air
    }})
    this.setState({pm10:{
      label:['dust pm10'],
      backgroundColor: 'transparent',
      borderColor: "#CC00CC" ? "#CC00CC" : '#c2cfd6',
      data: this.props.pm10
    }})
    this.setState({pm25:{
      label:['dust pm2.5'],
      backgroundColor: 'transparent',
      borderColor: "#3399FF" ? "#3399FF" : '#c2cfd6',
      data: this.props.pm25
    }})
    this.setState({o3:{
      label:['o3'],
      backgroundColor: 'transparent',
      borderColor: "#00CC00" ? "#00CC00" : '#c2cfd6',
      data: this.props.o3
    }})
    this.setState({co:{
      label:['CO'],
      backgroundColor: 'transparent',
      borderColor: "#B03060" ? "#B03060" : '#c2cfd6',
      data: this.props.co
    }})
    this.setState({no2:{
      label:['NO2'],
      backgroundColor: 'transparent',
      borderColor: "#330066" ? "#330066" : '#c2cfd6',
      data: this.props.no2
    }})
    this.setState({so2:{
      label:['SO2'],
      backgroundColor: 'transparent',
      borderColor: "#FF8C00" ? "#FF8C00" : '#c2cfd6',
      data: this.props.so2
    }})
    this.setState({aqi:{
      label:['AQI'],
      backgroundColor: 'transparent',
      borderColor: "#FF8C00" ? "#FF8C00" : '#c2cfd6',
      data: this.props.aqi
    }})
    }
    
    render(){
      if(this.props.checktemp){
        this.state.data.push(this.state.temp)
      }
      if(this.props.checkhu){
        this.state.data.push(this.state.hu)
      }
      if(this.props.checkair){
        this.state.data.push(this.state.air)
      }
      if(this.props.checkpm10){
        this.state.data.push(this.state.pm10)
      }
      if(this.props.checkpm25){
        this.state.data.push(this.state.pm25)
      }
      if(this.props.checko3){
        this.state.data.push(this.state.o3)
      }
      if(this.props.checkco){
        this.state.data.push(this.state.co)
      }
      if(this.props.checkno2){
        this.state.data.push(this.state.no2)
      }
      if(this.props.checkso2){
        this.state.data.push(this.state.so2)
      }
      if(this.props.checkaqi){
        this.state.data.push(this.state.aqi)
      }
      const datagraph = {
            labels:this.props.time,  
            datasets: this.state.data
            };
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
        return(
            <div className="animated fadeIn">
            <Col xs="12" md="6" xl="12">
            <Card><CardBody>
              <Line data={datagraph} options={sparklineChartOpts} width={100} height={30}/>
           </CardBody>
           </Card>
           </Col>
          </div>
        );
    }

}
export default Graphdata;