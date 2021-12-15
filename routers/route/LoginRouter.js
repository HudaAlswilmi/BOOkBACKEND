const express = require("express");
const LoginRouter = express.Router();

const { AddlogIn } = require("../controllers/Login");
LoginRouter.post("/Login", AddlogIn);

module.exports = LoginRouter;
