const mongoose = require('mongoose');
const schema = mongoose.Schema();

var ObjectId = schema.Types.ObjectId;

const Task = new Schema({
    projectId: { type: ObjectId, required: true },
    id: { type: ObjectId, required: true },
    name: { type: String, required: true }
});

module.exports = mongoose.model('Task', Task);