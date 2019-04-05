import {states} from "./constants";
import {findByState} from 'cities';

class WeatherReportUtil {
    getCitiesofState(state) {
        const allCities = findByState(state);
        const cityNames = allCities.map(city => city.city);
        return [...new Set(cityNames)];
    }
    getStateAbbreviations() {
        return states;
    }
    getForecastForLocation(pWeatherForecastCache, pLocation) {
        const lForecastForLocation = pWeatherForecastCache.find(
            function(pWeatherForecaseObject){
                return pWeatherForecaseObject.location === pLocation;
            }
        );
        return lForecastForLocation;
    }
    isForcastForLocationAvailable(pWeatherForecastCache, pLocation) {
        const lForecastForLocation = pWeatherForecastCache.find(
            function(pWeatherForcastObject){
                return pWeatherForcastObject.location === pLocation;
            }
        );
        return lForecastForLocation ? true : false;
    }
    getForecastForDay(pForecastForLocation, pDate) {
        const lForecastForDay = pForecastForLocation.forecast.find(
            function(pForecastObject){
                return pForecastObject.date === pDate;
            }
        );
        return lForecastForDay;
    }
}
export default new WeatherReportUtil();