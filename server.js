const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()

const loginRoutes = require('./Backend/Routes/loginRoutes');
const session = require('express-session');



const app = express();
//const port = 3000;

app.use(session({
    secret: 'your_secret_key', // เปลี่ยนให้ปลอดภัย
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use('/Frontend', express.static(path.join(__dirname, 'Frontend')));
app.use('/js', express.static(path.join(__dirname, 'Frontend/js')));
app.use('/image', express.static(path.join(__dirname, 'Frontend/image')));


app.use(loginRoutes);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/login.html'));
});

app.get('/login-admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/html/login-admin.html'));
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

app.get('/get-user', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({ message: 'Not logged in' });
    }
});


//require('./database');
app.listen(process.env.PORT, () => {
    console.log(`Server is up at port ${process.env.PORT}`)
});