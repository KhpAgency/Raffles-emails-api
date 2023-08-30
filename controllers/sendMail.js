const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

const sendEmail = require("../utils/sendEmails");

exports.sendEmail = asyncHandler(async (req, res, next) => {
  console.log(req.body);

  let capitalizeFirlstLetterOfName =
    req.body.name.split(" ")[0].charAt(0).toUpperCase() +
    req.body.name.split(" ")[0].slice(1).toLocaleLowerCase();

  console.log(capitalizeFirlstLetterOfName);

  //   let emailTamplate = `
  //   <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="utf-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1" />
  //     <title>Order Confirmation</title>
  //     <style>
  //       /* Inline styles */
  //       body {
  //         margin: 0;
  //         padding: 0;
  //         font-family: Arial, sans-serif;
  //         font-size: 16px;
  //         line-height: 1.5;
  //         color: #333333;
  //         background-color: #f8f8f8;
  //       }

  //       .container {
  //         max-width: 600px;
  //         margin: 0 auto;
  //         padding: 20px;
  //       }

  //       .logo {
  //         display: block;
  //         margin-bottom: 20px;
  //         text-align: center;
  //       }

  //       .logo img {
  //         max-width: 200px;
  //       }

  //       .order-summary {
  //         margin-bottom: 30px;
  //         background-color: #edeaea;
  //         border-radius: 5px;
  //         padding: 20px;
  //       }

  //       .order-summary h2 {
  //         font-size: 24px;
  //         font-weight: 700;
  //         margin-top: 0;
  //         margin-bottom: 20px;
  //         text-align: center;
  //       }

  //       .h3 {
  //         font-size: 21px;

  //       }

  //       .order-summary table {
  //         width: 100%;
  //         border-collapse: collapse;
  //       }

  //       .order-summary th,
  //       .order-summary td {
  //         padding: 10px;
  //         text-align: left;
  //         border-bottom: 1px solid #dddddd;
  //       }

  //       .order-summary th {
  //         background-color: #f7f7f7;
  //         font-weight: 600;
  //       }

  //       .order-summary tbody tr:last-child td {
  //         border-bottom: none;
  //       }

  //       .order-total {
  //         text-align: right;
  //         margin-top: 20px;
  //       }

  //       .thank-you {
  //         text-align: center;
  //       }

  //       .thank-you p {
  //         font-size: 18px;
  //         margin-bottom: 0;
  //       }

  //       .font-weight {
  //         font-weight: 600;
  //       }

  //       .d-block{
  //         display: block;
  //       }

  //       h3{
  //         text-align: center;

  //       }

  //       section p {
  //         display: inline;
  //       }
  //     </style>
  //   </head>
  //   <body style="background-color: #989898ac;">
  //     <div class="container">
  //       <div class="logo">
  //         <img src="https://peacockchocolateksa.com/img/Asset%202.png" alt="Your Logo" />
  //       </div>

  //       <div class="order-summary">
  //       <div style="display: flex; justify-content: right;">
  //         <span style="text-align: right; color: #8e8e8e;">28/8/2023</span>
  //         </div>
  //         <h2>Order Placed</h2>
  //             <span class="font-weight d-block">Hello, Ahmed</span>
  //             <span class="d-block">Thank you for your order from Peacock. Your order has been placed!</span>
  //             <span class="d-block">Order Number: gfdgfgdger4</span>

  //             <section>
  //               <div>
  //                 <h2>Order Details:</h2>
  //                 <span>Name: </span><span>ahmed</span>
  //                 <br>
  //                 <span>Details: </span><span>wreerwefds gf d</span>
  //                 <br>
  //                 <span>City: </span><span>alx</span>
  //                 <br>
  //                 <span>Phone: </span><span>5245354</span>
  //                 <br>
  //                 <span>Payment Method: </span><span>visa</span>
  //                 <br>
  //                 <br>
  //               </div>
  //             </section>

  //         <table>
  //           <thead>
  //             <tr>
  //               <th>Items</th>
  //               <th>Quantity</th>
  //               <th>Price</th>
  //             </tr>
  //           </thead>
  //           <tbody>

  //           <tr>
  //             <td>test</td>
  //             <td>1</td>
  //             <td>200</td>
  //           </tr>

  //           </tbody>
  //         </table>

  //         <div class="order-total">
  //           <p>Subtotal: 200 SAR</p>
  //           <p>Delivery Fees: 00 SAR</p>
  //           <p>Total: 200 SAR</p>
  //         </div>

  //         <div class="thank-you" style="text-align: left;">
  //           <span class="d-block">Thank you for your order!</span>
  //           <span class="d-block" style="margin-top: 0;">Peacock Team.</span>
  //         </div>
  //       </div>

  //     </div>
  //   </body>
  // </html>
  //   `;

  let emailTamplate = `testing`;

  try {
    await sendEmail({
      email: req.body.email,
      subject: `Your order has been placed`,
      message: emailTamplate,
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(402).json({ message: "sending email failed", error: error });
  }
});
