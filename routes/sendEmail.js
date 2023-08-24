const express = require("express");

const { sendEmail } = require("../controllers/sendMail");

const Router = express.Router();

Router.route("/").post(sendEmail);

module.exports = Router;
