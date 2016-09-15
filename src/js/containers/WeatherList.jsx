import React from 'react'
import {connect} from 'react-redux';
import Chart from '../components/Chart.jsx';

@connect((state) => {
    return {weather: state.weather}
})

export default class WeatherList extends React.Component {
    constructor() {
        super();

    }

    renderWeatherList() {
      console.log('weather', this.props.weather);
        return this.props.weather.map((cityData) => {
            const name = cityData.city.name;
            const temps = cityData.list.map(weather => weather.main.temp);
            const humidities = cityData.list.map(weather => weather.main.humidity);
            const pressures = cityData.list.map(weather => weather.main.temp);
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>
                      <Chart data={temps} color='red' unit="K"/>
                    </td>
                    <td>
                      <Chart data={humidities} color='orange' unit='hPa'/>
                    </td>
                    <td>
                      <Chart data={pressures} color='blue' unit='%'/>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table class="table table-hover">
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderWeatherList()}
                </tbody>
            </table>
        )
    }
}
