const express = require("express");
const SignUpRoute = express.Router();

const { addSignUp } = require("../controllers/SignUp");

SignUpRoute.post("/SignUp", addSignUp);

module.exports = SignUpRoute;
