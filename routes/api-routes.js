const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        console.log("get api/workouts")
        db.Workout.find({})
            .then(dbWorkouts => {
                console.log(dbWorkouts);
                res.json(dbWorkouts);
            }).catch(err => {
                res.status(400).json(err);
            })
            
    });

    app.post("/api/workouts", (req, res) => {
        console.log("post that workout!")
        //     db.Workout.create(body)
        //         .then(dbWorkout => {
        //             res.json(dbWorkout);
        //         })
        //         .catch(err => {
        //             res.status(400).json(err);
        //         });
    });

    app.get("/api/workouts/:id", (req, res) => {
        console.log("get ut with an id");
        // db.Workoiut.findById(params.id, (err, res) => {})
        // .then(dbWorkout => {
        //     res.json(dbWorkout)
        // })
        // .catch(err => {
        //     res.status(400).json(err);
        // });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("put it with an id");
        console.log(req.body);
        var addExercise = req.body;
        var id = req.params.id;
        console.log(addExercise);
        console.log(req.params)
        db.Workout.findOneAndUpdate({}, { $push: { exercises: addExercise } }, { new: true })
            .then(res => console.log(res));
            // .then(dbWorkout => {
            //     console.log(dbWorkout);
            //     res.json(dbWorkout)
            // })
            // .catch(err => {
            //     res.status(400).json(err);
            // });


    });
};