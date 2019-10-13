const mongoose = require('mongoose');

const MONGO_USERNAME = 'kdmy';
const MONGO_PASSWORD = 'Torreira95';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'todo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, { useNewUrlParser: true });

mongoose.Promise = global.Promise();

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));