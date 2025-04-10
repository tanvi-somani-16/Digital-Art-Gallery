const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors');
const errorMiddleware = require("./middleware/error");
const dotenv = require('dotenv');
dotenv.config();

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}
//onsole.log("MONGO_URI:", process.env.DB_URI);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// CORS
app.use(cors({
  origin: `${process.env.FRONTEND}`,
  credentials: true
}));

app.use(express.static(path.join(__dirname, "../frontend/build")));

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);




console.log("Registered routes:");
console.log("Registered routes:");
// app._router?.stack?.forEach((middleware) => {
//   if (middleware.route) {
//     console.log(`${middleware.route.stack[0].method.toUpperCase()} ${middleware.route.path}`);
//   }
// });


// Middleware for Errors
// app.use(errorMiddleware);
// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

module.exports = app;
