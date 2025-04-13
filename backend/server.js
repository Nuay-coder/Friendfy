const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../Frontend')));

app.get('/dashboard', (req, res) => {
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



app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
