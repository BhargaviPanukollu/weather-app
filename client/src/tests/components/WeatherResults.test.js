import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import WeatherResults from '../../components/WeatherResults';
import WeatherResultsMock from '../mock/WeatherResultsMock';
import WeatherReportUtilMock from '../mock/WeatherReportUtilMock';
import WeatherReportUtil from '../../utils/WeatherReportUtil';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

let weatherResults = null, fetchStub;
const props = {
    location: "Mountain View",
    unitFahrenheit: true
};
describe("<WeatherResults/>", () => {
    beforeEach(() => {
        fetchStub = sinon.stub(window, "fetch");
        fetchStub.returns(Promise.resolve(WeatherResultsMock.forecastFahrein));
        weatherResults = shallow(<WeatherResults {...props} />);
    });
    afterEach(() => {
        fetchStub.restore();
        weatherResults.unmount();
    });
    it("should be instance of WeatherResults", () => {
        expect(weatherResults.instance()).to.be.instanceOf(WeatherResults);
    });
    it("Test constructWeatherForecastObject", () => {
        weatherResults.setState({weatherForecastToday: [], dataReady: false, weatherForecastCache: []});
        weatherResults.instance().constructWeatherForecastObject(WeatherResultsMock.formatted);
        expect(weatherResults.state().dataReady).to.equal(true);
    });
    it("Test to see componentWillReceiveProps gets called", () => {
        const newProps = {
            location: "Sunny Vale",
            unitFahrenheit: true
        };
        const componentWillReceivePropsSpy =  sinon.spy(WeatherResults.prototype, "componentWillReceiveProps");
        weatherResults.setProps(newProps);
        expect(componentWillReceivePropsSpy.calledOnce).to.equal(true);
        componentWillReceivePropsSpy.restore();
    });
    it("Test componentWillReceiveProps to not call getWeatherData when props doesn't change", () => {
        const newProps = {
            location: "Mountain View",
            unitFahrenheit: true
        };
        const getWeatherDataSpy =  sinon.spy(weatherResults.instance(), "getWeatherData");
        weatherResults.setProps(newProps);
        expect(getWeatherDataSpy.calledOnce).to.equal(false);
        getWeatherDataSpy.restore();
    });
    it("Test getWeatherData when forecast data is available in cache", () => {
        const getForecastForLocationSpy = sinon.spy(WeatherReportUtil, "getForecastForLocation");
        weatherResults.setState({weatherForecastCache: WeatherReportUtilMock});
        weatherResults.instance().getWeatherData("Branford", true);
        expect(getForecastForLocationSpy.calledOnce).to.equal(true);
        expect(weatherResults.state().weatherForecastToday.length).to.equal(5);
        expect(weatherResults.state().dataReady).to.equal(true);
        expect(weatherResults.state().showError).to.equal(false);
        getForecastForLocationSpy.restore();
    });
    it("Test getWeatherData when forecast data is not fetched", () => {
        fetchStub.returns(Promise.resolve({ ok: false,
            status: 404}));
        weatherResults.instance().getWeatherData("Sunny Vale", true);
        expect(weatherResults.state().dataReady).to.equal(false);
        expect(weatherResults.state().showError).to.equal(true);
    });
});
