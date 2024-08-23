const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

// Retrieve environment variables
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

// Construct the MongoDB URI
const mongoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.bl8yc.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch((err) => {
    console.error("Error while connecting to MongoDB:", err.message);
    process.exit(1);
});

console.log("Mongo User:", process.env.MONGO_USER);
console.log("Mongo Password:", process.env.MONGO_PASSWORD);


// Middleware to handle JSON requests
app.use(express.json());

// API: GET type: / - return text "Hello World"
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
