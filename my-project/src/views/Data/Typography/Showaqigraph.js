import React from 'react'
import {Line} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';
class Showaqigraph extends React.Component{
  constructor(){
    super()
    this.state ={
      data:[],
      aqi:null
    }
  }
  componentWillMount(){
    this.setState({aqi:{
      label:['AQI'],
      backgroundColor: 'transparent',
      borderColor: "#FF6666" ? "#FF6666" : '#c2cfd6',
      data: this.props.aqi
    }})
    }
    
    render(){
        this.state.data.push(this.state.aqi)
      const daniel = {
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
           <Line data={daniel} options={sparklineChartOpts} width={100} height={30}/>
           </CardBody>
           </Card>
           </Col>
          </div>
        );
    }

}
export default Showaqigraph;