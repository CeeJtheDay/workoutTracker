const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workoutDB";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

// app.get("/all", (req, res) => {
//   db.animals.find({}, (err, found) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.get("/name", (req, res) => {
//   db.animals.find().sort({ name: 1 }, (err, found) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.get("/weight", (req, res) => {
//   db.animals.find().sort({ weight: -1 }, (err, found) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });

app.listen(3000, () => {
  console.log("App running on port 3000!");
});