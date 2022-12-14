// defining variables for the required package
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")


// this is set for the express
const app = express();
const PORT = process.env.PORT || 3005;


// linking it to assets my file path
app.use(express.static('public'));




// this requires for the api call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// this will first get to the html file, it will listen and then get it
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// This is for the note html
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})


// GET, POST, DELETE API Endpoints.


//  GET and POST functions 
app.route("/api/notes")

    // taking/ grabbing the notes list
    .get(function (req, res) {
        res.json(database);
    })

    

    // this will add the new note to the db.json
    .post(function (req, res) {
        let jsonFilePath = path.join(__dirname, "/db/db.json");
        let newNote = req.body;

        // allowing test note to the original
        let highestId = 99;
        
        // looping through the array to find the highest id
        for (let i = 0; i < database.length; i++) {
            let individualNote = database[i];

            if (individualNote.id > highestId) {
                // in notesarray highest id will be the highest
                highestId = individualNote.id;
            }
        }
        // assigning ID to the new note
        newNote.id = highestId + 1;
       
        //Pushing it to db.json
        database.push(newNote)

        // again writing the db.json file 
        fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {

            if (err) {
                return console.log(err);
            }
            console.log("Your note was saved!");
        });
        // giving back the response for the user new note
        res.json(newNote);
    });

// deleting the note base on ID
app.delete("/api/notes/:id", function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");

    // requesting to delete it by id
    for (let i = 0; i < database.length; i++) {

        if (database[i].id == req.params.id) {
           
            database.splice(i, 1); // Splice takes i position and then it will delete the 1 note.
            break;
        }
    }
    // writing the db.json again
    fs.writeFileSync(jsonFilePath, JSON.stringify(database), function (err) {

        if (err) {
            return console.log(err);
        } else {
            console.log("Your note was deleted!");
        }
    });
    res.json(database);
});


//setting up the server at last by listening to the port
app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`)
});