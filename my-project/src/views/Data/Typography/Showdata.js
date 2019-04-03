import React, { Component } from 'react';
import Showtable from './Showtable'

class Showdata extends Component{
  setDate = (props) =>{
    var start = ""
    if(props < 10){
      return start.concat("0",props)
    }else return start.concat(props)
  }
    render(){
      var startMonth
      var startDay
      var endMonth
      var endDay
      var fromDatetime =""
      var toDatetime =""
      let showtable = null
      startMonth = this.setDate(this.props.startDate.getMonth()+1)
      startDay = this.setDate(this.props.startDate.getDate())
      endMonth = this.setDate(this.props.endDate.getMonth()+1)
      endDay = this.setDate(this.props.endDate.getDate())
      fromDatetime = fromDatetime.concat(startMonth,"/",startDay,"/",this.props.startDate.getFullYear()," ",this.props.startTime) 
      toDatetime = toDatetime.concat(endMonth,"/",endDay,"/",this.props.endDate.getFullYear()," ",this.props.endTime)
      if(fromDatetime >= toDatetime){
          showtable = <div>
          {alert('Please select date and time again')}}
          </div>
      }
      else{
        showtable = <Showtable fromdate={startDay} frommonth={startMonth} fromyear={this.props.startDate.getFullYear()} fromtime={this.props.startTime}
        todate={endDay} tomonth={endMonth} toyear={this.props.endDate.getFullYear()} totime={this.props.endTime}
        checkTemp={this.props.checkTemp} checkHu={this.props.checkHu} checkAir={this.props.checkAir} 
        checkpm25={this.props.checkpm25} checkpm10={this.props.checkpm10} checko3={this.props.checko3}
        checkco={this.props.checkco} checkno2={this.props.checkno2} checkso2={this.props.checkso2}
        checkaqi={this.props.checkaqi}
        deviceEUI={this.props.deviceEUI}
        deviceName={this.props.deviceName}/>
      }
        return(
          <div className="animated fadeIn">
          
          {showtable}
          </div>
        );
    }
}
export default Showdata;