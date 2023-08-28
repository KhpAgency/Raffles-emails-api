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

  let emailTamplate = `<!DOCTYPE html>
  <html lang="en-US">
    <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <title>Confirm Your Email</title>
      <meta name="description" content="Reset Password Email" />
      <style type="text/css">
        a:hover {
          text-decoration: underline !important;
        }
      </style>
    </head>

    <body
      marginheight="0"
      topmargin="0"
      marginwidth="0"
      style="margin: 0px; background-color: #f2f3f8"
      leftmargin="0"
    >
      <!--100% body table-->
      <table
        cellspacing="0"
        border="0"
        cellpadding="0"
        width="100%"
        bgcolor="#f2f3f8"
        style="
          @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
          font-family: 'Open Sans', sans-serif;
        "
      >
        <tr>
          <td>
            <table
              style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr>
                <td style="height: 80px">&nbsp;</td>
              </tr>
              <tr>
                <td style="text-align: center">
                  <a href="http://www.peacockchocolateksa.com" title="logo" target="_blank">
                    <img
                      width="250"
                      src="http://www.peacockchocolateksa.com/img/Asset%202.png"
                      title="logo"
                      alt="logo"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td style="height: 20px">&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <table
                    width="95%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      max-width: 670px;
                      background: #fff;
                      border-radius: 3px;
                      text-align: center;
                      -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    "
                  >
                    <tr>
                      <td style="height: 40px">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="padding: 0 35px">
                        <span
                          style="
                            display: inline-block;
                            vertical-align: middle;
                            margin: 29px 0 26px;
                            border-bottom: 1px solid #cecece;
                            width: 200px;
                          "
                        ></span>
                        <p
                          style="
                            color: #455056;
                            font-size: 17px;
                            line-height: 24px;
                            text-align: left;
                          "
                        >
                          Hello ${capitalizeFirlstLetterOfName},</p>
                        <p
                          style="
                            color: #455056;
                            font-size: 17px;
                            line-height: 24px;
                            text-align: left;
                          "
                        >
                          Thank you for registering in Peacock. To start using your account please confirm your email address by clicking on the confirm your email button.
                        </p>
                        <a target="_blank" href="https://peacock-api-ixpn.onrender.com/api/v1/auth/confirm-email"
                        style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:25px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Confirm Your Email</a>

                        <p
                          style="
                            color: #455056;
                            font-size: 17px;
                            line-height: 24px;
                            text-align: left;
                          "
                        >
                          Welcome to Peacock,
                        </p>
                        <p
                          style="
                          margin-top: 3px;
                            color: #455056;
                            font-size: 17px;
                            line-height: 2px;
                            text-align: left;
                          "
                        >
                          The Peacock Team.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="height: 40px">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="height: 20px">&nbsp;</td>
              </tr>
              <tr>
                <td style="text-align: center">
                  <p
                    style="
                      font-size: 14px;
                      color: rgba(69, 80, 86, 0.7411764705882353);
                      line-height: 18px;
                      margin: 0 0 0;
                    "
                  >
                    &copy; <strong>www.peacockchocolateksa.com</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="height: 80px">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!--/100% body table-->
    </body>
  </html>`;
  
  try {
   let msg = await sendEmail({
      email: req.body.email,
      subject: `Your order has been placed`,
      message: emailTamplate,
    });
    res.status(200).json({ message: "success" , data: msg});
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "sending email failed", error: error });
  }
});
