require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const corsConfig = {
    origin: true,
    credentials: true
};

app.use(cors(corsConfig));

app.listen(8008, () => console.log(`Started listening on port 8008!`));

// const insertNewUser = require('./model/addUser');
// const newUser = insertNewUser()
//     .then(r => {
//         console.log("Addition successful", r)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// const searchUser = require('./model/searchUser');
// const searchUserRun = searchUser()
//     .then(r => {
//         console.log("Successfully Found: ", r)
//     })
//     .catch(err => {
//         console.log(err);
//     })