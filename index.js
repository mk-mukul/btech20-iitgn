require("dotenv").config();
require("./views/models/Traffic");
const express = require("express");
const exphbs = require("express-handlebars");
const data = require("./data");
const mongoose = require("mongoose");
const Traffic = mongoose.model("TrafficSem4");

const app = express();

const port = process.env.PORT || 3000;

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  // useNewUrlParser: true,
  // useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let count = 0;

app.get("/", async (req, res) => {
  res.render("index", { data });
});
app.get("/sem4", async (req, res) => {

  count += 1;
  let currentDate = new Date();
  let day_i = currentDate.getDay();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let _date = currentDate.getDate();

  if (hour.toString().length < 2) {
    hour = "0" + hour;
  }
  if (minute.toString().length < 2) {
    minute = "0" + minute;
  }
  if (second.toString().length < 2) {
    second = "0" + second;
  }
  if (_date.toString().length < 2) {
    _date = "0" + _date;
  }

  const time = hour + ":" + minute + ":" + second;
  const date = _date + " " + months[month] + " " + year;
  const day = days[day_i];
  try {
    const traffic = new Traffic({ date, day, time, count });
    await traffic.save();
    res.send({ status: "OK" });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

app.listen(port, () => {
  console.log("listing to port at http://localhost:" + port);
  console.log("running...");
});
