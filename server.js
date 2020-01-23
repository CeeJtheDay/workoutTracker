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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
// app.get("/", )

// app.post("/api/workouts", ({body}, res) => {
//     db.Workout.create(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
// })

// app.get("/api/workouts", (req, res) => {
//     console.log("get api/workouts");
//     db.Workout.find({}, (error, data) => {
//         console.log(data);
        // if (error) {
        //   res.send(error);
        // } else {
        //   res.json(data);
        // }
//     });
// });

// app.get("/exercise", (req, res) => {
//     console.log("get /exercise");
//     res.sendFile("/exercise.html", (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// })
// const databaseUrl = "workoutDB";
// const collections = ["workout"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
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