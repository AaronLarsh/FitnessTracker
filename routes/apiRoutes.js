const Workout = require("../models/workout");

module.exports = function(app){
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
    });
    
    app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
    });
    
    app.put("/api/workouts/:id", (req, res) => {
    Workout.update(
        { _id : req.params.id}, 
        { $push: { exercises: [req.body] } })
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
    });
    
    app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
    });

    app.post("/api/workouts/range",function (req,res){    
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
    });
}
