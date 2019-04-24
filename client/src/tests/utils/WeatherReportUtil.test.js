import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import WeatherReportUtil from '../../utils/WeatherReportUtil';
import WeatherReportUtilMock from '../mock/WeatherReportUtilMock';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe("<WeatherReportUtil/>", () => {
    it("Test getCitiesofState", () => {
        expect(WeatherReportUtil.getCitiesofState("CA")).to.not.equal(null);
    });
    it("Test getStateAbbreviations", () => {
        expect(WeatherReportUtil.getStateAbbreviations()).to.not.equal(null);
    });
    it("Test isForcastForLocationAvailable when forecast is available in cache", () => {
        expect(WeatherReportUtil.isForcastForLocationAvailable(WeatherReportUtilMock, "Branford", "F")).to.equal(true);
    });
    it("Test isForcastForLocationAvailable when forecast is not available in cache", () => {
        expect(WeatherReportUtil.isForcastForLocationAvailable(WeatherReportUtilMock, "Mountain View", "F")).to.equal(false);
    });
    it("Test getForecastForLocation when forecast is available in cache", () => {
        expect(WeatherReportUtil.getForecastForLocation(WeatherReportUtilMock, "Branford", "F").length).to.equal(5);
    });
});
