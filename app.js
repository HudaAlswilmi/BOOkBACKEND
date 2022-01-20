require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config()
require("./db/db.js");
app.use(express.json());
app.use(cors());

const BookRouter = require("./routers/route/BookRouter");
const AudioBookRouter = require("./routers/route/AudioBookRouter")
const SinUpRouter = require("./routers/route/SinUpRouter");
const LoginRouter = require("./routers/route/LoginRouter");

app.use(LoginRouter);
app.use(SinUpRouter);
app.use(BookRouter);
app.use(AudioBookRouter);



console.log(process.env.PORT) 
const Port = 5000;
app.listen(process.env.PORT, () => {
  console.log("server run on 5000 port");
});
