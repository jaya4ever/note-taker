// defining variables for the required needed
/*const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const database = require('../db/db.json');
const uuid = require('../helpers/uuid');
const { json } = require('express/lib/response');
const res = require('express/lib/response');

// getting routes to retrieving notes
notes.get('/', (req, res)=>{
console.info(`${req.method}request received for notes`);
console.log(database);
res.json(database);

});
// post request for the new note
notes.post('/',(req,res)=>{
    console.info(`${req.method} request received to add reviews`);
    const{title, text} = req.body;
    if(title && text){
        const newNote = {
            title,
            text,
            id:uuid()
        };
        db.push(newNote);
        let notesArr = JSON.stringyfy(db);

        fs.writeFile(path.join(__dirname,'../db/db.json'),notesArr, (err)=>{
            if(err){
                throw err;
            }console.log(`Review for ${newNote.title} that it written in JSON`);
            
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
// * DELETE /api/notes/:id deleting notes
//TODO: Delete notes not working.
notes.delete('/:id', (req, res) => {
    const idRequested = req.params.id;
    for(let i = 0; i < database.length; i++){
        if(idRequested === database[i].id){
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
    //res.json(database);

})
module.exports = notes;*/