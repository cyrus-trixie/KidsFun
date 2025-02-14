const express = require('express');
const router = express.Router();
const db = require('../db'); // Import database connection

router.post('/register', (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const sql = "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [firstname, lastname, email, password], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Error registering user" });

        res.json({ success: true, message: "User registered successfully!" });
    });
});

module.exports = router;
