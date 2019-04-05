import React from 'react';
import {days, months} from '../utils/constants';

class WeatherTile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dayForecast = this.props.dayForecast;
        const image = `http://openweathermap.org/img/w/${dayForecast.icon}.png`;
        const forecastDate = new Date(dayForecast.date);
        return (
            <div className="card">
                <header>
                    <div className="card-header">{days[forecastDate.getDay()]}</div>
                </header>
                <div className="day-details">
                    {months[forecastDate.getMonth()]} {forecastDate.getDate()}
                </div>
                <div className="weather-details">
                    <div className="temp">{dayForecast.temp}</div>
                    <div><img src={image} className="icon"/>{dayForecast.description}</div>
                </div>
                <div className="additional-info">
                    <span className="maxtemp">{dayForecast.tempMax}</span>
                    <span className="mintemp"> | {dayForecast.tempMin}</span>
                </div>
            </div>
        );
    }
}

export default WeatherTile;