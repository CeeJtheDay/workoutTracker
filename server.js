const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


// const databaseUrl = "workoutDB";
// const collections = ["workout"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/html/index.html"));
// });

// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/html/stats.html"));
// });

// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/html/exercise.html"));
// });

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// // routes
// app.use(require("./routes/api.js"));

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
  console.log(`App listening on: 'http://localhost:${PORT}'`);
});