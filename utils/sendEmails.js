const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // creating the transporter ( service that will send email like gmail)
  const transporter = nodemailer.createTransport({
    // service: "goDaddy",
    // name: "smtpout.secureserver.net",
    host: "rafflesksa.com",
    port: 465, // if secure true => port = 465 || if secure false => port = 587
    secure: true,

  
    // secureConnection: true,
    auth: {
      user: 'info@rafflesksa.com',
      pass: 'Raffles@2023*',
    },
  });

  // define email options ( from , to , subject , email content )
  const emailOptions = {
    from: "Raffles <info@rafflesksa.com>",
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  await transporter.sendMail(emailOptions)
};

module.exports = sendEmail;
