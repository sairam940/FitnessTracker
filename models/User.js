const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
});

mongoose.model('User', userSchema);