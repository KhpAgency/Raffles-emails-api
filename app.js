const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = express();
const PORT = process.env.PORT || 3002;
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const ApiError = require("./utils/ApiError");
const globalError = require("./middlewares/errorMiddleware");

const emailRoute = require("./routes/sendEmail");


// middlewares

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}


// Mount Routes
app.use("/sendEmail", emailRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware
app.use(globalError);

const server = app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

// UnhandledRejections event handler (rejection outside express)
process.on("unhandledRejection", (err) => {
  console.error(`unhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.log("server shutting down...");
    process.exit(1);
  });
});
