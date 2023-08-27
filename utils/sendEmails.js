const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // creating the transporter ( service that will send email like gmail)
  const transporter = nodemailer.createTransport({
    service: "goDaddy",
    name: "rafflesksa.com",
    host: "rafflesksa.com",
    port: 465, // if secure true => port = 465 || if secure false => port = 587
    secure: true,

    // secureConnection: false,
    auth: {
      user: "info@rafflesksa.com",
      pass: "Raffles@2023",
    },
    // tls: { rejectUnauthorized: false },
  });

  // define email options ( from , to , subject , email content )
  const emailOptions = {
    from: "Raffles <info@rafflesksa.com>",
    to: "bohy.ahmed@gmail.com",
    subject: `test`,
    text: "testing email address",
  };

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
      console.log("Server is ready to take our messages");
    }
  });

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendEmail;
