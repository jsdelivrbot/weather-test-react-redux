import React, {Component} from 'react';
import {connect} from 'react-redux'; //connect reducer to container
import Chart from '../components/chart.js';
import GoogleMap from '../components/google_map.js';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map((weather)=> weather.main.temp);
    const pressure = cityData.list.map((weather)=> weather.main.pressure);
    const humidities = cityData.list.map((weather)=> weather.main.humidity);

    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const {lon,lat} = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange" unit="K" /></td>
        <td><Chart data={pressure} color="red" unit="hPa" /></td>
        <td><Chart data={humidities} color="black" unit="%"/></td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
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
