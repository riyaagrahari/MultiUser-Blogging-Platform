require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const insertNewUser = require('./model/addUser');

const corsConfig = {
    origin: true,
    credentials: true
};

app.use(cors(corsConfig));
const newUser = insertNewUser()
    .then(r => {
        console.log("Addition successful", r)
    })
    .catch(err => {
        console.log(err);
    })
app.listen(8008, () => console.log(`Started listening on port 8008!`));