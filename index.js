const express = require("express")
const app = require("./src/app.js")
const mongoose = require("mongoose")
const port = 3000;

/// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Connect to Database

const Database_Url = "mongodb+srv://AjayPraj:9213Ajay@cluster0.cxky07y.mongodb.net/";
mongoose.connect(Database_Url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', ()=> console.log("Connected to database"));


app.listen(port, () => console.log(`App is listening on the port ${port}`));