const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // creating the transporter ( service that will send email like gmail)
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    // name: "smtp.office365.com",
    // host: "smtp.office365.com",
    port: 587, // if secure true => port = 465 || if secure false => port = 587
    secure: false,

  
    // secureConnection: true,
    auth: {
      user: 'Info@raffles-me.com',
      pass: 'Raffles4123*',
    },
  });

  // define email options ( from , to , subject , email content )
  const emailOptions = {
    from: "Raffles <Info@raffles-me.com>",
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
