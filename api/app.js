const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


//require('dotenv').config();

let AuthController = require('./auth/AuthController');

let UserController = require('./user/UserController');

//middleware
app.use(cors());
app.use('/users', UserController);
app.use('/api/auth', AuthController); // use this route to login and register.


// database connection-------------------------------------------------------------------------

const url = "mongodb://localhost:27017/mydatabase";
mongoose.connect(url)
.then(() => {console.log("Connected with database")})
.catch((error) => {console.log("No connection")});

//mongodb+srv://tarun:<password>@cluster0.n8rijtf.mongodb.net/


//server port----------------------------------------------------------------------------------
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("app is running on port 8000");
})