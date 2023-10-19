const express = require("express");
const { products: items } = require("./data.js");

//intializing the app
const app = express();

//creating the server logic
app.get("/", (req, res) => {
  res.status(200).json(items);
});
//listening on a port
app.listen(3000, () => {
  console.log("The server is listening on the port 3000");
});
