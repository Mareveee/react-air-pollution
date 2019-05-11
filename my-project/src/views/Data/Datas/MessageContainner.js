import { subscribe } from 'mqtt-react';
import BeforeMaps from './BeforeMaps'
import React from 'react'

function MessageList(props){
      return (
              //console.log("Map ",props.data)
              <BeforeMaps data={props}/>
      );
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