const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql2');

var db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if (err) throw err;
    console.log(`✅ Connected DB: ${process.env.MYSQL_DATABASE}`);
});

module.exports = db;



const app = express();
//const port = 3000;

app.use('/Frontend', express.static(path.join(__dirname, 'Frontend')));
app.use('/js', express.static(path.join(__dirname, 'Frontend/js')));
app.use('/image', express.static(path.join(__dirname, 'Frontend/image')));


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/login.html'));
});


app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/dashboard-admin.html'));
});

app.get('/event-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/event-admin.html'));
});

app.get('/reservation-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/reservation-admin.html'));
});

app.get('/user-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/user-admin.html'));
});

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/homepage.html'));
});

app.get('/reservation', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/reservation.html'));
});

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/event.html'));
});

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/aboutus.html'));
});

app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/support.html'));
});


//require('./database');
app.listen(process.env.PORT, () => {
    console.log(`Server is up at port ${process.env.PORT}`)
});