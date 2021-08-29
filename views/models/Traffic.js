const mongoose = require('mongoose');

const trafficSchema = new mongoose.Schema({
    date: {
        type: String,
    },
    day: {
        type: String,
    },
    time: {
        type: String,
    },
    count: {
        type: Number,
    }
});

mongoose.model('Traffic', trafficSchema);
