// create a web server
// 1. create a web server
// 2. create a route
// 3. create a handler
// 4. create a response
// 5. start the server
// 6. test the server

// 1. create a web server
const express = require('express');
const app = express();

// 2. create a route
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

// 5. start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


