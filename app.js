require('dotenv').config()
const express = require("express");
const app = express();
require("./db/db.js");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const BookRouter = require("./routers/route/BookRouter");
const AudioBookRouter = require("./routers/route/AudioBookRouter")
const SinUpRouter = require("./routers/route/SinUpRouter");
const LoginRouter = require("./routers/route/LoginRouter");

app.use(LoginRouter);
app.use(SinUpRouter);
app.use(BookRouter);
app.use(AudioBookRouter);

const Port = 5000;
app.listen(Port, () => {
  console.log("server is on");
});
