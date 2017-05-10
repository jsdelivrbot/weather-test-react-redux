import _ from 'lodash'; // usually use _ represent lodash
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines' // lib char

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default function(props){
  return (
    <div>
      <Sparklines data={props.data} height={50} width={100} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  )
}
