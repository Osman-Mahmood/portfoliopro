"use strict";

var router = require("express").Router();

var nodemailer = require("nodemailer");

router.post("/contact", function (req, res) {
  var data = req.body;

  if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
    return res.json({
      msg: "Please Fill All The Fields!"
    });
  }

  var smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "mahmoodibrahim886@gmail.com",
      pass: "usman886"
    }
  });
  var mailOptions = {
    from: data.email,
    to: "mahmooodibrahim886@gmail.com",
    subject: "message from ".concat(data.name),
    html: "\n\n            <h3>Informations<h3/>\n            <ul>\n            <li>Name: ".concat(data.name, "<li/>\n            <li>Email: ").concat(data.email, "<li/>\n            </ul>\n            <h3>Message</h3>\n            <p>").concat(data.message, "<p/>\n            ")
  };
  smtpTransporter.sendMail(mailOptions, function (error) {
    try {
      if (error) return res.status(400).json({
        msg: "Please Fill All The Fields!"
      });
      res.status(200).json({
        msg: "Thank You For Contacting Usman."
      });
    } catch (error) {
      if (error) return res.status(500).json({
        msg: "There is server error"
      });
    }
  });
});
module.exports = router;