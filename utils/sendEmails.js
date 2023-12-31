const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // creating the transporter ( service that will send email like gmail)
  const transporter = nodemailer.createTransport({
    // service: "goDaddy",
    name: process.env.EMAIL_HOST,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT, // if secure true => port = 465 || if secure false => port = 587
    secure: true,
    logger: true,

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // define email options ( from , to , subject , email content )
  const emailOptions = {
    from: `${options.name.split(" ")[0].charAt(0).toUpperCase() +
    options.name.split(" ")[0].slice(1).toLocaleLowerCase()} < ${options.email}>`,
    // "Raffles <info@rafflesksa.com>",
    to: process.env.EMAIL_USER,
    subject: options.subject,
    html: options.message,
  };

  transporter.sendMail(emailOptions, function (error, response) {
    if (error) {
      console.log("Failed in sending mail");
      console.dir({ success: false, existing: false, sendError: true });
      console.dir(error);
    } else {
      console.log("Successful in sending email");
      console.dir({ success: true, existing: false, sendError: false });
      console.dir(response);
    }
  });
};

module.exports = sendEmail;
