const mongoose = require('mongoose');
const schema = mongoose.Schema();

var ObjectId = mongoose.Schema.Types.ObjectId;

const Project = new Schema({
    id: { type: ObjectId, required: true },
    name: { type: String, required: true }
});

module.exports = mongoose.model('Project', Project);