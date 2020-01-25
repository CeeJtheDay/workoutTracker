const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// require("./seeders/seed");
// const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/3000';

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
}, { useNewUrlParser: true });

mongoose.set('useFindAndModify', false);

app.listen(3000, () => {
  console.log(`App listening on: 'http://localhost:${PORT}'`);
});
