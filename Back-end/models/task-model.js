const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    task: {type: String, required: true},
    isCompleted: {type: Boolean, required: true, default: true},
}, {timestamps: true});


module.exports = mongoose.model("Tasks", TaskSchema);