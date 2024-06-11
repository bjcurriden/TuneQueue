"use strict";
const express = require('express');
// const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
const PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`🦀 Server running on http://127.0.0.1:${PORT} 🦀`);
});
