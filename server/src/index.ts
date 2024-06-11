
import express from "express";
// const SpotifyWebApi = require("spotify-web-api-node");
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router";
const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🦀 Server running on http://127.0.0.1:${PORT} 🦀`)
})
