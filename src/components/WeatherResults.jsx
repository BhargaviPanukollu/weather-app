import React from 'react';
import WeatherReportUtil from '../utils/WeatherReportUtil';
import WeatherTile from './WeatherTile';
import 'whatwg-fetch';
import '../styles/WeatherResults.css';

class WeatherResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherForecastCache: [],
            dataReady: false
        };
    }

    componentDidMount() {
        this.getWeatherData(this.props.location);
    }

    constructWeatherForecastObject = (forecast) => {
        const cityName = forecast.city.name;
        const forecastlist = forecast.list.filter(x=>x.dt_txt && x.dt_txt.includes("06:00:00"));
        const fivedayforecast = forecastlist.map((weather) => ({
            date: weather.dt_txt.split(" ")[0],
            temp: weather.main.temp,
            tempMin: weather.main.temp_min,
            tempMax: weather.main.temp_max,
            description: weather.weather[0].description,
            icon: weather.weather[0].icon
        }));
        this.setState({
            weatherForecastCache: fivedayforecast,
            dataReady: true
        });
    }

    getWeatherData = (location) => {
        const unit = this.props.unitFahrenheit ? "imperial" : "metric";
        if (!WeatherReportUtil.isForcastForLocationAvailable(this.state.weatherForecastCache, location)) {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&appid=5463248286578faf66ef6edca6ae1569&format=json`;
            window.fetch(url).then(response => {
                if(response.ok) {
                    response.json().then(res => {
                        this.constructWeatherForecastObject(res);
                    });
                }

            });
        }
    }
    renderTiles = () => {
        const forecast = this.state.weatherForecastCache;
        const weatherTiles = [];
        for (let i = 0; i < forecast.length; i++) {
            weatherTiles.push(<WeatherTile dayForecast={forecast[i]}/>);

        }
        return weatherTiles;
    }
    componentWillReceiveProps(nextProps) {
        const location = nextProps.location;
        this.getWeatherData(location);
    }

    /**
     * Actual render method to render weather tiles. Before we render, we would
     * read the weather forcast details from our cache maintained under state.
     */
    render() {
        return(<div>
            {this.state.dataReady &&
            <div className="container">
                <div className="card-wrapper">
                    {this.renderTiles()}
                </div>
            </div>
            }
            </div>);
    }
}

export default WeatherResults;