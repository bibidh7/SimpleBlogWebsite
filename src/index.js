//
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");

//app.use(h5bp({ root: __dirname + "/public" }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(8080, function() {
  console.log("server started");
});
