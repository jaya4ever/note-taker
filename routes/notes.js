const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const db = require('../db/db.json');
//const uuid = require('..helpers/uuid');
const { json } = require('express/lib/response');
const res = require('express/lib/response');

notes.get('/', (req, res)=>{
console.info(`${req.method}request received for notes`);
console.log(db)
res.json(db);

});

notes.post('./',(req,res)=>{
    console.info(`${req.method} request to post the reviews`);
    const{title, text} = req.body;
    if(title && text){
        const newNote = {
            title,
            text,
            //id:uuid()
        };
        db.push(newNote);
        let notesArr = JSON.stringyfy(db);

        fs.writeFile(path.join(__dirname,'../db/db.json'),notesArr, (err)=>{
            if(err){
                throw err;
            }console.log(`Review the ${newNote.title} that it written in JSON`);
            
        });
        const response = {
            status: 'success',
            body:'newNote',
        };
        console.log(response);
        res.status(201).json(response);

    }else{
        res.status(500).json('having error for the review');
    }
});

notes.delete('/:id',(req, res)=>{
    const requestedId = req.params.id;
    for(let i = 0; i < db.length; i++){
        if(requestedId === db[i].id){
            db.splice(i,1);
            break;
        }

    }
    fs.writeFile(path.join(__dirname,'../db/db.json'),JSON.stringify(db), (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Notes have been deleted');
        }
    });
    //location.reload();

})
module.exports = notes;