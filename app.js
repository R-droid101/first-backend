const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


// middlewares - functions that execute when a specific route is being hit
// app.use('/posts', () => {
//     console.log('Middleware: posts');
// });

// creating routes
app.get('/', (req, res) => { // this goes to the default route
    res.send('Hello World');
});

// we are segmenting the app
// app.get('/posts', (req, res) => {
//     res.send('A new page: posts');
// });
app.use('/posts', postsRoute);

// get means that it shoots back a message
// we will use post to update something
// we can also use delete to remove a certain post
// we can also use patch

// Connecting to a database - using mongoDB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to DB");
});

// to listen to the server
app.listen(3000);
