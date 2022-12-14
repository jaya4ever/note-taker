const html = require('express').Router();
const path = require('path')

html.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

html.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exporting routes to use in server.js
module.exports = html;