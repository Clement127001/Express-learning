const express = require("express");
//own middlewares (1)
const logger = require("./logger");
const authorize = require("./authorize");
//third party middlewares (3)
const morgan = require("morgan");

//middlewares provided by express (2)
// app.use(express.static("./public"));

const app = express();

//we can add the middlewares in three ways 1 -> using our own middleware , 2 -> adding the middleware provided by express
//3 -> third party middlewares

//using multiple middlewares using array [mid1,mid2,...,midn]

app.use("/api", [authorize]);
app.use([logger, morgan("tiny")]);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

//protected routes
app.get("/api/products", (req, res) => {
  res.send("Products page");
});

app.get("/api/items", (req, res) => {
  res.send("Items page");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
