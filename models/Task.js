const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true });

TaskSchema.index({ title: "text" });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;