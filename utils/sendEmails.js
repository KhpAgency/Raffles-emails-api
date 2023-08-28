const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // creating the transporter ( service that will send email like gmail)
  const transporter = nodemailer.createTransport({
    // service: "goDaddy",
    name: "rafflesksa.com",
    host: "rafflesksa.com",
    port: 465, // if secure true => port = 465 || if secure false => port = 587
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },

    auth: {
      user: "info@rafflesksa.com",
      pass: "Raffles@2023",
    },
  });

  // define email options ( from , to , subject , email content )
  const emailOptions = {
    from: "Raffles <info@rafflesksa.com>",
    to: "vigenol638@stypedia.com",
    subject: `test`,
    text: "testing email address",
  };

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendEmail;
