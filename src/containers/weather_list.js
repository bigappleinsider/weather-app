import React, { Component } from 'react';

import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map((item) => item.main.temp);
    const humidity = cityData.list.map((item) => item.main.humidity);
    const pressure = cityData.list.map((item) => item.main.pressure);

    const cityName = cityData.city.name;

    //destructuring
    const { lon, lat } = cityData.city.coord;
    /*
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    */
    
    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>

        <td>
          <Chart data={temps} color="blue" units="K" />
        </td>

        <td>
          <Chart data={humidity} color="green" units="hPa" />
        </td>

        <td>
          <Chart data={pressure} color="red" units="%" />
        </td>

      </tr>
    );
  }
  render() {
    return (
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
    );
  }
}
/*
function mapStateToProps(state) {
    return { weather: state.weather };
}
*/
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
