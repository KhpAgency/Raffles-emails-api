const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

const sendEmail = require("../utils/sendEmails");

exports.sendEmail = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  // let capitalizeFirlstLetterOfName =
  // req.user.name.split(" ")[0].charAt(0).toUpperCase() +
  // req.user.name.split(" ")[0].slice(1).toLocaleLowerCase();

  let emailTamplate = `testEmail`;

  try {
    await sendEmail({
      email: req.body.email,
      subject: `Your order has been placed`,
      message: emailTamplate,
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "sending email failed", error: error });
  }
});
