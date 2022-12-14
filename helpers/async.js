const fs = require('fs')
const util = require('util')



const read = util.promisify(fs.readFile)

const write = (fileDestination, content) => {
    fs.writeFile(fileDestination, JSON.stringify(content), (err) => {
        if (err) {
            console.log(err)
        } else {

            console.log('new note was written')
        }
    })
}

const readThenWrite = (note, fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {

        if (err) {
            console.log(err)
        } else {

            const parsedNotes = JSON.parse(data);
            parsedNotes.push(note)
            write(fileName, parsedNotes)
        }
    })
}

const readThenDelete = (id, fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {

        if (err) {
            console.log(err)
        } else {

            const parsedNotes = JSON.parse(data);
            const filterdNotes = parsedNotes.filter((note)=> note.id !== id)
            write(fileName, filterdNotes)
        }
    })
}



module.exports = { read, readThenWrite, readThenDelete }