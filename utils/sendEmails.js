const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // creating the transporter ( service that will send email like gmail)
  const transporter = nodemailer.createTransport({
    // service: "goDaddy",
    name: process.env.EMAIL_HOST,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT, // if secure true => port = 465 || if secure false => port = 587
    secure: true,

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // define email options ( from , to , subject , email content )
  const emailOptions = {
    from: "Raffles <info@rafflesksa.com>",
    // to: "vigenol638@stypedia.com",
    // subject: `test`,
    // text: "testing email address",
    to: options.email,
    subject: options.subject,
    html: options.message,
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
