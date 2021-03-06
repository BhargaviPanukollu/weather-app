import React from 'react';
import {days, months} from '../utils/constants';

class WeatherTile extends React.Component {
    render() {
        const dayForecast = this.props.dayForecast;
        const unitFahrenheit = this.props.unit;
        const image = `https://openweathermap.org/img/w/${dayForecast.icon}.png`;
        const forecastDate = new Date(dayForecast.date);
        return (
            <div className="card">
                <header>
                    <div className="card-header">{days[forecastDate.getDay()]}</div>
                </header>
                <div className="day-details">
                    {months[forecastDate.getMonth()]} <span className="forecast-date">{forecastDate.getDate()}</span>
                </div>
                <div className="weather-details">
                    {unitFahrenheit && <div className="temp">{dayForecast.temp}</div>}
                    {!unitFahrenheit && <div className="tempInCelsius">{dayForecast.temp}</div>}
                    <div><img src={image} className="icon" alt="weathericon"/>{dayForecast.description}</div>
                </div>
                <div className="additional-info">
                    <span className="maxtemp">{dayForecast.tempMax}</span> |
                    {unitFahrenheit && <span className="mintemp"> {dayForecast.tempMin}</span>}
                    {!unitFahrenheit && <span className="mintempInCelsius"> {dayForecast.tempMin}</span>}
                </div>
            </div>
        );
    }
}

export default WeatherTile;