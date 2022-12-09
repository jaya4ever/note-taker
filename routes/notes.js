const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const db = require('../db/db.json');

notes.get('/', (req, res)=>
console.info(`${req.mehod}request received for notes`)
);