import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import WeatherReport from '../../components/WeatherReport';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

let weatherReport = null;
describe("<WeatherReport/>", () => {
    beforeEach(() => {
        weatherReport = shallow(<WeatherReport/>);
    });
    afterEach(() => {
        weatherReport.unmount();
    });
    it("should be instance of WeatherReport", () => {
        expect(weatherReport.instance()).to.be.instanceOf(WeatherReport);
    });
    it("should set the initial state accordingly if earlier selection is available", ()  => {
        localStorage.setItem('stateSelected', "CA");
        localStorage.setItem('citySelected', "Mountain View");
        weatherReport = shallow(<WeatherReport/>);
        expect(weatherReport.state().stateSelected).to.equal("CA");
        expect(weatherReport.state().citySelected).to.equal("Mountain View");
        localStorage.removeItem('stateSelected');
        localStorage.removeItem('citySelected');
    });
    it("Test handleStateChange", () => {
        weatherReport.instance().handleStateChange("CA");
        expect(weatherReport.state().stateSelected).to.equal("CA");
        expect(weatherReport.state().citySelected).to.equal("Verdi");
        expect(localStorage.getItem("stateSelected")).to.equal("CA");
        expect(localStorage.getItem("citySelected")).to.equal("Verdi");
    });
    it("Test handleCityChange", () => {
        weatherReport.instance().handleCityChange("Sunny Vale");
        expect(weatherReport.state().citySelected).to.equal("Sunny Vale");
        expect(localStorage.getItem("citySelected")).to.equal("Sunny Vale");
    });
    it("Test handleUnitToggle", () => {
        const event = {
            target: {
                className: "unitSelection"
            }
        };
        weatherReport.instance().handleUnitToggle(event);
        expect(weatherReport.state().unitFahrenheit).to.equal(false);
    });
});
