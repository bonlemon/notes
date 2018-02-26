import express      from 'express';
import bodyParser   from 'body-parser';

import { serverPort } from './etc/config.json';

import * as db from './utils/DataBaseUtis';

db.setUpConnection();

const app = express();

// Middleware for parsing requests 
// and transform from json
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => {
        res.send(data);
    })
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id);
});



const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port: ${serverPort}`)
})