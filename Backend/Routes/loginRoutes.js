const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../Routes/database');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

// สมัครสมาชิก
router.post('/api/register', async (req, res) => {
    const { display_name, fname, lname, birth_date, gender, phone_number, email, password } = req.body;

    db.query('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }

        if (results.length > 0) {
            return res.status(400).send('Email is already in use.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertQuery = `
            INSERT INTO user (display_name, fname, lname, birth_date, gender, phone_number, email, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(insertQuery, [display_name, fname, lname, birth_date, gender, phone_number, email, hashedPassword], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Failed to register');
            }
            res.redirect('/login');
        });
    });
});

// ล็อกอิน
router.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }

        if (results.length === 0) {
            return res.status(401).send('Email not found');
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            req.session.user = {
                id: user.id,
                display_name: user.display_name
            };
            res.redirect('/event');
        } else {
            res.status(401).send('Incorrect password');
        }
    });
});

module.exports = router;
