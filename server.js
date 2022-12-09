// defining variables to work on for the application
const express = require('express');
const path = require('path');
const api = require('./routes/api');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',api);
app.use(express.static('public'));


