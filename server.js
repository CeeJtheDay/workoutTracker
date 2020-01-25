const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// require("./seeders/seed");
// const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_mftfbwdz:ras6mvjpv40tmat015sou8252@ds035623.mlab.com:35623/heroku_mftfbwdz", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.listen(3000, () => {
  console.log(`App listening on: 'http://localhost:${PORT}'`);
});

module.exports = app;