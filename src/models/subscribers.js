const mongoose = require("mongoose")       /// require mongoose from mongoose

const subscriberSchema = new mongoose.Schema({    /// create the schema of our database
    Name: {
        type: String,
        required: true,
    }, 
    subscribedChannel: {
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('subscriber', subscriberSchema); // exports the schema with the help of mongoosse.model