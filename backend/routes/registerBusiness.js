const express = require('express');
const router = express.Router();
const db = require('../db'); 

router.post('/registerBusiness', (req, res) => {
    const { businessName, email, phone, location, password } = req.body;

    const sql = "INSERT INTO businesses (business_name, email, phone_number, business_location, password) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [businessName, email, phone, location, password], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Error registering business" });
        }

        res.json({ success: true, message: "Business registered successfully!" });
    });
});

module.exports = router;
