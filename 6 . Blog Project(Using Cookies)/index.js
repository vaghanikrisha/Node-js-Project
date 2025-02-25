const express = require('express');
const port = 8080;
const app = express();

const path = require('path');

// Mongo Connection
const connectDB = require('./config/db');
connectDB();


app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port :- ${port}`);
})