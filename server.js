require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./Database/Connection.js");
const app = express();

app.use(express.json());
app.use(cors());
const Jugadors = require("./v1/Routes/Jugadors.js")
const Partides = require("./v1/Routes/Partides.js")

app.use('/api/v1/Jugadors', Jugadors);
app.use('/api/v1/Partides', Partides);

const port = "3000";

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
client.connect();