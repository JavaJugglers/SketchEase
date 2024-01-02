// Node modules to require
const express = require('express');
const app = express();
const path = require('path');

// Specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); // Get the path to use our "public" folder where we stored our html, css, images, etc.
app.use(express.static(publicPath));  // Tell express to use that folder

// Here's where we specify what to send to users that connect to our web server
app.get("/", function (req, res) {
    res.sendFile(path.join(publicPath, "index.html"));
});

// Run this server by entering "node server.js" using your command line.
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});