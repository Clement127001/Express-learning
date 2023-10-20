const express = require("express");
const app = express();

const logger = require("./logger.js");

//to add the middleware automatically we use app.use(<path>,middleware)
//where the path can be mentioned so that the middleware will be applied to only the routes following that path otherwise it will be applied to all req

app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/products", (req, res) => {
  res.send("Products page");
});

app.get("/api/items", (req, res) => {
  res.send("Items page");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
