// defining variables for the required package
const express = require("express");
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/notes')

//this is set for the express
const app = express();
const PORT = process.env.PORT || 3000;


//linking it to assets to my file path
app.use(express.static('public'));

//this requires for the api call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this is for the api and html routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



//setting up the server at last by listening to the port
app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`)
});