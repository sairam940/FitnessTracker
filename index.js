const express = require('express');
const mongoose = require('mongoose');
//GO BACK AND CHANGE THIS LATER ON
const keys = require('./config/dev');
require('./models/User');
require('./models/Survey');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://fitnesstrackercontroller:csc414group1@ds245250.mlab.com:45250/fitnesstracker');
const app = express();

require('./signin')(app);

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

app.post('/login', (req, res) => {
    
})

app.get('/user', (req, res) => {
    res.send(req.body.email);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);