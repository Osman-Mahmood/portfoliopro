"use strict";

require("dotenv").config();

var express = require("express");

var cors = require("cors");

var path = require("path");

var contactRoute = require("./route/contactRoute");

var app = express();
app.use(express.json());
app.use(cors());
app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express["static"]("client/build"));
  app.get("*", function (req, res) {
    return res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

var port = process.env.PORT || 5000;
app.listen(port, console.log("server listing to port 5000 only"));