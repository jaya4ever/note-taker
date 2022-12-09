// defining variables to work on for the application
const express = require('express');
const req = require('express/lib/request');
const path = require('path');
const api = require('./routes/api');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',api);
app.use(express.static('public'));

app.get('/', (req,res)=>
res.sendFile(path.join(__dirname,'./public/index.html'))
);

app.get('/notes',(req,res)=>
 res.sendFile(path.join(__dirname,'./public/notes.html'))
);

app.get('*',(req,res)=>
 res.sendFile(path.join(__dirname,'./publicindex.html'))
);

app.listen(PORT,()=>
console.log(`App listening at http://localhost:${PORT}`)
);




