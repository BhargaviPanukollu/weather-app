const forecasts = require("./model.js");
exports.findAll = (req, res) => {
    forecasts.find().then(forecasts => {
            res.send(forecasts);
        }).catch(err => {res.status(500).send({
            message: err.message || "Some error occurred while retrieving forecasts."
        });
    });
};
/**
 * findOne first checks if data exists in our DB, if it doesn't exists we send a redirection
 * to openweathermap api to fetch forecast details.
 * Here we will maintain records in DB related to Mountain View for demo purpose.
 */

exports.findOne = (req, res) => {
    forecasts.find({"city.name" : req.params.cityName, "city.unit" : req.params.unit}).then(forecast => {
            if(forecast && forecast.length > 0) {
                res.send(forecast[0]);
            } else {
                res.redirect(301, `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.cityName}&units=${req.params.unit}&appid=5463248286578faf66ef6edca6ae1569&format=json`);
            }
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Forecast not found for city " + req.params.cityName
            });
        }
        return res.status(500).send({
            message: "Error retrieving forecast for city " + req.params.cityName + err.message
        });
    });
};