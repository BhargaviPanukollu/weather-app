import React from 'react';
import CitySelection from './CitySelection';
import WeatherReportUtil from "../utils/WeatherReportUtil";
import WeatherResults from './WeatherResults';

import '../styles/WeatherReport.css';

class WeatherReport extends React.Component {
    constructor(props) {
        super(props);
        let stateSelected, citySelected;
        if (localStorage.getItem('stateSelected') && localStorage.getItem('citySelected')) {
            stateSelected = localStorage.getItem('stateSelected');
            citySelected = localStorage.getItem('citySelected');
        }
        this.state = {
            stateSelected: stateSelected,
            citySelected: citySelected,
            unitFahrenheit: true,
            unitFStyle: "selection",
            unitCStyle: ""
        };
    }

    handleStateChange = (state) => {
        const citiesofState = WeatherReportUtil.getCitiesofState(state);
        this.setState({
            stateSelected: state,
            citySelected: citiesofState[0]
        });
        localStorage.setItem('stateSelected', state);
        localStorage.setItem('citySelected', citiesofState[0]);
    }

    handleCityChange = (city) => {
        this.setState({citySelected: city});
        localStorage.setItem('citySelected', city);
    }
    handleUnitToggle = (event) => {
        if (["unitSelection", "selection"].includes(event.target.className)) {
            const unitSelected = this.state.unitFahrenheit;
            this.setState({
                unitFahrenheit: !unitSelected,
                unitFStyle: this.state.unitFStyle === "selection" ?  "" : "selection",
                unitCStyle: this.state.unitCStyle === "selection" ?  "" : "selection",
            });
        }
    }
    render() {
        const location = `${this.state.citySelected},us`;
        return (
            <div className="weather-app">
                <div className="app-intro">Select city for weather details</div>
                <CitySelection
                    className="location-selection-component"
                    state={this.state.stateSelected}
                    city={this.state.citySelected}
                    onStateChange={this.handleStateChange}
                    onCityChange={this.handleCityChange}/>
                <div className="results-header">5 Days weather forecast for {this.state.citySelected} in <div className="unitSelection" onClick={this.handleUnitToggle}><span className={this.state.unitFStyle}>F</span> | <span className={this.state.unitCStyle}>C</span></div></div>
                <WeatherResults location={location} unitFahrenheit={this.state.unitFahrenheit}/>
            </div>
        );
    }
}

export default WeatherReport;