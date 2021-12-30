require('dotenv').config();
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes');
const app = express();
const passport = require('passport');
require('./config/database');


app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);

app.listen( process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`Server listening on port ${ process.env.PORT || 4000 }`));