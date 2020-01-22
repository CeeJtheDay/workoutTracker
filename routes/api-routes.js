const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        // console.log(db.Workout.find());
        API.getLastWorkout();
    })
}