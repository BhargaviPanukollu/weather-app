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
                    <div className="temp"><img src={image} className="icon" alt="weathericon"/>{dayForecast.temp}<div className="unitSelection" onClick={this.handleUnitToggle}><span className={this.props.unitFStyle}>F</span> | <span className={this.props.unitCStyle}>C</span></div></div>
                </header>
                <div className="selection-meta">
                    <div>Humidity: {dayForecast.humidity}%</div>
                    <div className="wind">Wind: {dayForecast.windSpeed} {unitFahrenheit && <span> mph</span>} {!unitFahrenheit && <span> mps</span>} {dayForecast.windDegree}</div>
                    <div>Cloudiness: {dayForecast.cloudiness}%</div>
                    <div>Pressure: {dayForecast.pressure} hPa</div>
                </div>
            </div>
        );
    }
}

export default TodaysWeather;