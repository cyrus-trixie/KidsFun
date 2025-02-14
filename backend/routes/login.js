const express = require('express');
const router = express.Router();
const db = require('../db'); 

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json({ success: false, message: "Error logging in" });

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        res.json({ success: true, message: "Login successful!", user });
    });
});

module.exports = router;
