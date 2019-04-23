import React from 'react';
import {days, months} from '../utils/constants';

class TodaysWeather extends React.Component {
    render() {
        const dayForecast = this.props.dayForecast;
        const unitFahrenheit = this.props.unit;
        const image = `https://openweathermap.org/img/w/${dayForecast.icon}.png`;
        const forecastDate = new Date(dayForecast.date);
        return (
            <div className="currentSelection">
                <header className="selection-weather">
                    <div className="selection-city">{dayForecast.cityName}, {this.props.state.toUpperCase()}</div>
                    <div>{days[forecastDate.getDay()]}, {forecastDate.getDate()} {months[forecastDate.getMonth()]} {forecastDate.getFullYear()}</div>
                    <div>{dayForecast.description}</div>
                    <div className="temp"><img src={image} className="icon" alt="weathericon"/>{dayForecast.temp}</div>
                </header>
                <div className="selectionMeta">
                    <div>Humidity: <span className="value">{dayForecast.humidity}%</span></div>
                    <div className="wind">Wind: <span className="value">{dayForecast.windSpeed} {unitFahrenheit && <span> mph</span>} {!unitFahrenheit && <span> mps</span>} {dayForecast.windDegree}</span></div>
                    <div>Cloudiness: <span className="value">{dayForecast.cloudiness}%</span></div>
                    <div>Pressure: <span className="value">{dayForecast.pressure} hPa</span></div>
                </div>
            </div>
        );
    }
}

export default TodaysWeather;