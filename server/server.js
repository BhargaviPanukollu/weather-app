const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config.js');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

require('./routes.js')(app);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
mongoose.connect(dbConfig.url, {useNewUrlParser: true}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
