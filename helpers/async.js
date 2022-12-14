//defining variables to require fs and util
const fs = require('fs')
const util = require('util')


//read note by using util.promisify
const read = util.promisify(fs.readFile)

// for writting notes and give the result at the final file destination
const write = (fileDestination, content) => {
    fs.writeFile(fileDestination, JSON.stringify(content), (err) => {
        if (err) {
            console.log(err)
        } else {

            console.log('new note was written')
        }
    })
}

// this will first read and then write the name 
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

// after reading the note it is going to delete by using id
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