const express = require("express");
const router = express.Router();
const subscriberModel = require("../models/subscribers");

router.route("/subscribers").get(async (req, res, next) => {         /// get request when /subscribers endpoint called
    const subscribers = await subscriberModel.find({});  // it find the subscribers and give it in json format
    try {
            res.send(subscribers)    // if find then return the response with subscribers
}
catch (error) { 
    res.status(404).send(error)         /// otherwise give the error with 404 status code 
    
}
});

router.route("/subscribers/names").get(async (req, res) => {  /// get request when /subscribers/names endpoint called
    try{
     const subscribers = await subscriberModel.find().select({
         name: 1,
         subscribedChannel: 1,                 /// it find the name, subscribedChaneel and id in the data
         _id: 0,
     });
     res.send(subscribers)            /// if find that then simply return response with subscribers
    } catch (err) {
     res.status(404).send(err)          //// otherwise send the error with 404 status code 
    }
 });

 router.route("/subscribers/:id").get(async (req, res) => {         // get request when /subscribers/:id endpont called 
    try{
    const _id = req.params.id;
        const subscriberData  = await subscriberModel.findById(_id)   // find the id with findById method
        res.send(subscriberData );         /// and simply return the response with subscribersData
    } catch (err) {
        res.status(400).send({ message: "Error! Subsc"})  /// otherwise give the error msg
    }
  });

  module.exports = router;