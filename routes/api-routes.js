const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        console.log("get api/workouts")
        // console.log(res);
        db.Workout.find({})
            .then(dbWorkouts => {
                // console.log(res);
                console.log(dbWorkouts);
                res.json(dbWorkouts);
            }).catch(err => {
                res.status(400).json(err);
            })

    });

    app.post("/api/workouts", (req, res) => {
        console.log("post that workout!");
        console.log("body before create");
        console.log(req);
        var newExercise = req.body;
        db.Workout.create({})
            .then(newWorkout => {
                console.log("response after create!");
                console.log(newWorkout)
                db.Workout.findByIdAndUpdate(newWorkout._id, { $push: { exercises: newExercise } }, { new: true })
                    .then(dbWorkout => {
                        res.json(dbWorkout);
                    }).catch(err => {
                        res.status(400).json(err);

                    })
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        // console.log("put it with an id");
        // console.log(req.body);
        var addExercise = req.body;
        var id = req.params.id;
        // console.log(addExercise);
        // console.log(req.params)
        db.Workout.findByIdAndUpdate(id, { $push: { exercises: addExercise } }, { new: true })
            .then(upWorkout => {
                res.json(upWorkout)
            }).catch(err => {
                res.status(400).json(err);
            })

    });


    app.get("/api/workouts/range", (req, res) => {
        console.log("get that range!");
        db.Workout.find({})
            .then(popWorkouts => {
                res.json(popWorkouts)
            }).catch(err => {
                res.status(400).json(err);
            })

    });

};