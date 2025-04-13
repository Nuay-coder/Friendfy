const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../Frontend')));

app.get('/dashboard-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/dashboard-admin.html'));
});

app.get('/event-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/event-admin.html'));
});

app.get('/reservation-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/reservation-admin.html'));
});

app.get('/user-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/user-admin.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/home.html'));
});

app.get('/reservation', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/reservation.html'));
});

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/event.html'));
});

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/aboutus.html'));
});

app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/support.html'));
});



app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
