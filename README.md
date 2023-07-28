# GetYoutubeSubscribers-node-app-

Hii these is a backend based project or basically a API to get the deatails or show the user of the subscribers data like name, channel that which has subscribed and date on which data and id. These app is done with the help of backend skills or backend frameworks like node express mongoose etc.. 
In this my main file is index.js which is used to connect the database and run the node server.
And in the app.js file handle the request and response with the help of subscriber route file which i make in the routes folder.
And I define my subscriberModel in the models folder in that have a subscriberModel.js file.
In data.js data contained.



HTTP request methods used in the project
1. GET http://localhost:3000/ → The client will see the “Hello User!” message which is used to verify that application is working properly.

2. GET http://localhost:3000/subscribers → When the user hit this, **endpoint /subscribers**, the client will **get an array of all subscribers in JSON format** from the database where the data is stored in local MongoDB database.

3. GET http://localhost:3000/subscribers/name →When the user hit this, endpoint **/subscribers/names** the client will to get an array of all subscribers in JSON format with **only name and subscribed Channel fields** from the database, where the data is stored in local MongoDB database.

4. GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint **/subscribers/:id** in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular **user’s details like name, subscribed Channel and subscribed Date** from the database, where the data is stored in local MongoDB database.

5. GET http://localhost:3000/subscribers/:id → When the client gives **incorrect USER’S ID instead of correct USER’S ID** (where the ID does not match) which is stored in database, the **Client will get an Error message like“ Subscriber doesn't exist with the given _id: sdijvrbv” in JSON format with 400 error status code.**
