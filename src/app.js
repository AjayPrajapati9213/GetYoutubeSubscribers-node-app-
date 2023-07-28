const express = require("express");
const app = express();
const path = require("path");          // import the path module
const subscriberRoute = require("./routes/subscribersRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {           /// get request when endpoint is /
    res.sendFile(path.join(__dirname, "./index.html"));     // pass the html file at this endpoint
  });


app.use("/",subscriberRoute);

module.exports = app;