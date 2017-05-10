import React, {Component} from 'react';
import {connect} from 'react-redux'; //connect reducer to container

class WeatherList extends Component{
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

function mapDispatchToProps(state){ // this state come from reducer index.js, app state
  return {weather: state.weather} // state.weather is a piece state weather
}
// function mapDispatchToProps({weather}){ // const weather = state.weather // state only have one property weather
//   return {weather: weather} // {weather}==={weather: weather}
// }

export default connect(mapDispatchToProps)(WeatherList);
