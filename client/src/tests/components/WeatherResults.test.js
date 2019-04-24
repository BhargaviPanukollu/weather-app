import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import WeatherResults from '../../components/WeatherResults';
import WeatherResultsMock from '../mock/WeatherResultsMock';
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
});
