##AWS deployment instance
http://ec2-18-191-137-245.us-east-2.compute.amazonaws.com

##Techincal Details
This app uses [openweathermap 5 day forecast api](https://openweathermap.org/forecast5) to fetch weather forecast for a city.

Client application is bootstrapped using [create react app](https://facebook.github.io/create-react-app/docs/getting-started)

###Instructions for local development-
1. Clone the repo
2. Make sure we have node, yarn installed.
3. Install mongodb and follow the steps provided at - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
4. As we want to demonstrate with dummy data for one city. Please use json files available in data folder and using mongoimport import those records.
    `mongoimport --db weatherapp --collection forecasts --file ~/forecasts_F.json`
    `mongoimport --db weatherapp --collection forecasts --file ~/forecasts_C.json`
5. yarn install
6. cd client yarn install
7. yarn dev in root folder
8. we should see both client running on port 3000 and server on 5000.
9. Test server [using](http://localhost:5000/forecasts/Mountain%20View.metric)
10. For running test cases cd client yarn test



