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
    getForecastForLocation(weatherForecastCache, location, isUnitFahren) {
        const metrictoCheck = isUnitFahren ? "F" : "C";
        const locationForecast = weatherForecastCache.length > 0 ? weatherForecastCache.filter(forecast => forecast.city === location) : null;
        if (locationForecast) {
            const forecastbyMetric = locationForecast.length > 0 && locationForecast.filter( forecast => forecast.metric === metrictoCheck);
            return forecastbyMetric[0].forecast;
        }
    }
    isForcastForLocationAvailable(weatherForecastCache, location, isUnitFahren) {
        const metrictoCheck = isUnitFahren ? "F" : "C";
        const locationForecast = weatherForecastCache.length > 0 ? weatherForecastCache.filter(forecast => forecast.city === location) : null;
        if (locationForecast) {
            const forecastbyMetric = locationForecast.length > 0 && locationForecast.filter( forecast => forecast.metric === metrictoCheck);
            return (forecastbyMetric && forecastbyMetric.length > 0);

        } else{
            return false;
        }
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