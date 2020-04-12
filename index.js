const express = require('express')
const app = express()
const cors = require('cors');

const corsConfig = {
    origin: true,
    credentials: true
};

app.use(cors(corsConfig));

app.listen(8008, () => console.log(`Started listening on port 8008!`));