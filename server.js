const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// require("./seeders/seed");
// const path = require("path");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://User1:Password1@ds251622.mlab.com:51622/heroku_g64nfqrf";

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(MONGODB_URI);
mongoose.set('useFindAndModify', false);

app.listen(3000, () => {
  console.log(`App listening on: 'http://localhost:${PORT}'`);
});

module.exports = app;