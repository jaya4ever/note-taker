// defining variables for the required needed
const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { read, readThenWrite, readThenDelete } = require('../helpers/async')



// getting routes to retrieving notes
notes.get('/notes', (req, res) => {

    read('./db/db.json').then((notes) => res.json(JSON.parse(notes))).catch((err) => res.json(err))
});
// post request for the new note
notes.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add reviews`);
    const { title, text } = req.body;

    if(req.body){
    const newNote = {
        title,
        text,
        id: uuid()
    };

    readThenWrite(newNote, './db/db.json')
    res.json('note added!!!')
    }else{
        res.json('note not created')
    }
 
});
// * DELETE /api/notes/:id deleting notes
//TODO: Delete notes not working.
notes.delete('/notes/:id', (req, res) => {
    readThenDelete(req.params.id, './db/db.json')
    res.json('note deleted!!!')
})
module.exports = notes;