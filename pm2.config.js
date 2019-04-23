module.exports = {
    apps : [{
        name        : "weather-api",
        script      : "./server/server.js",
        watch       : true,
        env: {
            "NODE_ENV": "development",
        },
        env_production : {
            "NODE_ENV": "production"
        }
    }]
};