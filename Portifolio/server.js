const express = require("express");
const server = require("http");
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 6500;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/", (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: process.env.user,
    subject: `Message  from ${req.body.email}:${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error");
      res.send("error");
    } else {
      console.log(`Email sent : + ${info.response}`);
      res.send("sucess");
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
