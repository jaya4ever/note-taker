const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const db = require('../db/db.json');
//const res = require('express/lib/response');

notes.get('/', (req, res)=>{
console.info(`${req.method}request received for notes`);
console.log(db)
res.json(db);

});
