// defining variables for the required package
const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const noteDatabase = require("./db/db")
// const uuid = require('./helpers/uuid')
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/notes')

// this is set for the express
const app = express();
const PORT = process.env.PORT || 3000;


// linking it to assets my file path
app.use(express.static('public'));
// this requires for the api call
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// // this will first get to the html file, it will listen and then get it
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// // This is for the note html
// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/notes.html"));
// })


// //  GET and POST functions 
// app.route("/api/notes")

//     // taking/grabbing the notes list
//     .get(function (req, res) {
//         res.json(noteDatabase);
//     })


//     // this will add the new note to the db.json
//     .post(function (req, res) {
//         const { title, text } = req.body;
//         if (title && text) {
//             const newNote = {
//                 title,
//                 text,
//                 id: uuid()
//             }
//             noteDatabase.push(newNote);

//         }


//         let jsonFilePath = path.join(__dirname, "/db/db.json");
//         fs.writeFile(jsonFilePath, JSON.stringify(noteDatabase), function (err) {

//             if (err) {
//                 return console.log(err);
//             }
//             console.log("Your note was saved!");
//         })

//         res.json(newNote);
//     })

// // deleting the note base on ID
// app.delete("/api/notes/:id", function (req, res) {
//     let jsonFilePath = path.join(__dirname, "/db/db.json");

//     // requesting to delete it by id
//     for (let i = 0; i < noteDatabase.length; i++) {

//         if (noteDatabase[i].id == req.params.id) {

//             noteDatabase.splice(i, 1); // Splice takes i position and then it will delete the 1 note.
//             break;
//         }
//     }
//     // writing the db.json again
//     fs.writeFileSync(jsonFilePath, JSON.stringify(noteDatabase), function (err) {

//         if (err) {
//             return console.log(err);
//         } else {
//             console.log("Your note was deleted!");
//         }
//     });
//     res.json(noteDatabase);
// });


//setting up the server at last by listening to the port
app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`)
});