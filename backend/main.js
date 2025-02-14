
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const registerBusinessRoute = require('./routes/registerBusiness');


// Use Routes
app.use(signupRoute);
app.use(loginRoute);
app.use(registerBusinessRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

