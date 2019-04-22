import React from 'react';
import WeatherReportUtil from '../utils/WeatherReportUtil';
import WeatherTile from './WeatherTile';
import TodaysWeather from './TodaysWeather';
import 'whatwg-fetch';
import '../styles/WeatherResults.css';

class WeatherResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherForecastToday: [],
            dataReady: false,
            weatherForecastCache: []
        };
    }

    componentDidMount() {
        this.getWeatherData(this.props.location, this.props.unitFahrenheit);
    }

    constructWeatherForecastObject = (forecast) => {
        const cityName = forecast.city.name;
        const forecastlist = forecast.list.filter(x=>x.dt_txt && x.dt_txt.includes("06:00:00"));
        const fivedayforecast = forecastlist.map((weather) => ({
            date: weather.dt_txt.split(" ")[0],
            temp: weather.main.temp,
            tempMin: weather.main.temp_min,
            tempMax: weather.main.temp_max,
            humidity: weather.main.humidity,
            pressure: weather.main.pressure,
            windSpeed: weather.wind.speed,
            windDegree: weather.wind.deg,
            description: weather.weather[0].description,
            icon: weather.weather[0].icon,
            cloudiness: weather.clouds.all,
            cityName: cityName
        }));
        const forecastToCache = this.constructForecastCache(fivedayforecast);
        const availableForecastCache = this.state.weatherForecastCache;
        availableForecastCache.push(forecastToCache);
        this.setState({
            weatherForecastToday: fivedayforecast,
            weatherForecastCache: availableForecastCache,
            dataReady: true
        });
    }

    constructForecastCache = (forecast) => {
        const todaysDate = new Date();
        return {
            forecast: forecast,
            city: this.props.location,
            hour: todaysDate.getHours(),
            metric: this.props.unitFahrenheit ? "F" : "C"
        };
    }

    getWeatherData = (location, isUnitFahrenheit) => {
        const unit = isUnitFahrenheit ? "imperial" : "metric";
        if (!WeatherReportUtil.isForcastForLocationAvailable(this.state.weatherForecastCache, location, isUnitFahrenheit)) {
            // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&appid=5463248286578faf66ef6edca6ae1569&format=json`;
            const url = `/forecasts/${location}.${unit}`;
            window.fetch(url).then(response => {
                if(response.ok) {
                    response.json().then(res => {
                        this.constructWeatherForecastObject(res);
                    });
                }
            }).catch(error => {
                console.log("Error in fetching weather forecast", error.message);
            });
        } else {
            const locationWeatherForecast = WeatherReportUtil.getForecastForLocation(this.state.weatherForecastCache, location, isUnitFahrenheit);
            this.setState({
                weatherForecastToday: locationWeatherForecast,
                dataReady: true
            })
        }
    }
    renderTiles = () => {
        const forecast = this.state.weatherForecastToday;
        const unit = this.props.unitFahrenheit;
        const weatherTiles = [];
        for (let i = 0; i < forecast.length; i++) {
            weatherTiles.push(<WeatherTile key={i} dayForecast={forecast[i]} unit={unit}/>);

        }
        return weatherTiles;
    }
    renderWeather = () => {
        const forecast = this.state.weatherForecastToday;
        const unit = this.props.unitFahrenheit;
        const state = this.props.state;
        return (
            <TodaysWeather dayForecast={forecast[0]} unit={unit} state={state}/>
        );
    };
    componentWillReceiveProps(nextProps) {
        if(this.props.location !== nextProps.location || this.props.unitFahrenheit !== nextProps.unitFahrenheit) {
            this.getWeatherData(nextProps.location, nextProps.unitFahrenheit);
        }
    }

    /**
     * Actual render method to render weather tiles. Before we render, we would
     * read the weather forcast details from our cache maintained under state.
     */
    render() {
        return(<div>
                <div>{this.state.dataReady && this.renderWeather()}</div>
                <div className="container">
                    <div className="card-wrapper">
                        {this.state.dataReady && this.renderTiles()}
                    </div>
                </div>
        </div>);
    }
}

export default WeatherResults;