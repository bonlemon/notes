import express from 'express';

import PORT from './constants';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
});

const server = app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
})