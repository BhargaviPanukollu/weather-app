const mongoose = require('mongoose');

const forecastsSchema = mongoose.Schema({
    cod: {
        type: 'Date'
    },
    message: {
        type: 'Number'
    },
    cnt: {
        type: 'Number'
    },
    list: {
        type: [
            'Mixed'
        ]
    },
    city: {
        id: {
            type: 'Number'
        },
        name: {
            type: 'String'
        },
        coord: {
            lat: {
                type: 'Number'
            },
            lon: {
                type: 'Number'
            }
        },
        country: {
            type: 'String'
        },
        population: {
            type: 'Number'
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Forecasts', forecastsSchema);