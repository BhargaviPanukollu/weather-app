const forecasts = require("./model.js");
exports.findAll = (req, res) => {
    forecasts.find().then(forecasts => {
            res.send(forecasts);
        }).catch(err => {res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req, res) => {
    forecasts.find({"city.name" : req.params.cityName}).then(forecast => {
            if(!forecast) {
                return res.status(404).send({
                    message: "Forecast not found with cityName " + req.params.cityName
                });
            }
            res.send(forecast[0]);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.cityName
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.cityName
        });
    });
};