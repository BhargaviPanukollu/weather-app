module.exports = (app) => {
    const forecasts = require("./controller.js");
    // Retrieve all Forecasts
    app.get('/forecasts', forecasts.findAll);

    // Retrieve forecast of a city
    app.get('/forecasts/:cityName', forecasts.findOne);
}