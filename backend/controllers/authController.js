const jwt = require("jsonwebtoken");

//generate jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h"});
};

//Register user
exports.registerUser = async (req, res) => {};

// Login user
exports.loginUser = async (req, res) => {};

exports.getUserInfo = async (req, res) => {};

//run
//npm start
//npx nodemon server.js
//when start again