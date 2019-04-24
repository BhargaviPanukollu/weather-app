import React from 'react';
import WeatherReportUtil from "../utils/WeatherReportUtil";
import "../styles/CitySelection.css";

class CitySelection extends React.Component {
    handleStateChange = (event) => {
        this.props.onStateChange(event.target.value);
    }
    handleCityChange = (event) => {
        this.props.onCityChange(event.target.value);
    }
    handleCityFocus = () => {
        this.inputCity.value = "";
    }
    /**
     * renderStateSelection maps all states available and renders it as dropdown.
     */
    renderStateSelection() {
        const state = this.props.state || "CA";
        const allUSStateAbbreviations = WeatherReportUtil.getStateAbbreviations();
        const createUSStateOptions = (state) => {
            return <option key={state.toLowerCase()} value={state.toLowerCase()}>{state}</option>;
        };
        return (
            <select
                className = "state-select"
                value={state}
                onChange={this.handleStateChange}>
                {allUSStateAbbreviations.map(createUSStateOptions)}
            </select>
        );
    }
    /**
     * renderCitySelection renders all cities associated with the selected state.
     */
    renderCitySelection() {
        const state = this.props.state || "CA";
        const citiesInState = WeatherReportUtil.getCitiesofState(state);
        const createCityOptions = (city) => {
            return <option key={city.toLowerCase()} value={city}/>;
        };
        return (<div className="cityTypeahead">
                <input list="citiesList" className="city-select" value={this.props.city} onChange={this.handleCityChange} ref={el => this.inputCity = el} onFocus={this.handleCityFocus} placeholder="select city"/>
                <datalist id="citiesList">{citiesInState.map(createCityOptions)}</datalist>
            </div>
        );
    }
    render() {
        return (
            <div className = "location-widgets">
                {this.renderStateSelection()}
                {this.renderCitySelection()}
            </div>
        );
    }
}

export default CitySelection;