require('dotenv').config();
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes');
const app = express();
require('./config/database');
const passport = require('passport');


app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);

app.listen(4000, () => console.log("Server running on port 4000"));