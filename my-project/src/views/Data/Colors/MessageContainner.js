import { subscribe } from 'mqtt-react';
import React from 'react'
import Locationpredict from './locationpredict'

function MessageList(props){
      return (<Locationpredict data={props}/>);
    //if(object != undefined){
      //  const data = Object.keys(object);
        
        //listItems = data.map((dkeys) =>
          // Correct! Key should be specified inside the array.
          //<ListItem keys={dkeys.toString()}
               //     value={object[dkeys.toString()]} />
        //);
    //}
}
 
export default subscribe({topic: 'application/aqi'})(MessageList)