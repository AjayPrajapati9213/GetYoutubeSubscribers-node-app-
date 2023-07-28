const mongoose = require("mongoose")
const data = require('./data');
const subscriberModel = require('./models/subscribers');

const Database_Url = "mongodb+srv://AjayPraj:9213Ajay@cluster0.cxky07y.mongodb.net/";
mongoose.connect(Database_Url, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (err)=> console.log(err))
db.once('open', ()=> console.log("Database created"))

/// refresh all connections
const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    
    await subscriberModel.insertMany(data)
    await mongoose.disconnect()
}
refreshAll();