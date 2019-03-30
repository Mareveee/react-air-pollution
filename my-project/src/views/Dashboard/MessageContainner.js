import { subscribe } from 'mqtt-react';
import React from 'react'
import DashboardShow from './DashboardShow'
import Locationdashboard from './locationdashboard'


function MessageList(props){
        console.log(props)
        //listItems = data.map((dkeys) =>
          // Correct! Key should be specified inside the array.
          //<ListItem keys={dkeys.toString()}
               //     value={object[dkeys.toString()]} />
        //);

        return (
            <Locationdashboard data={props}/>
          );
  

}



 
export default subscribe({topic: 'application/aqi'})(MessageList)