const express = require("express");
const app = express();

//working with middleware { we can say that the express cake is made of bunch of middleware as each layer :) }
//req => middleware =>res
//middleware can be brutal (by sending its own response ) or kind (by sending the permissions to next middleware)

const listen = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getUTCDate();

  console.log(method + " " + url + " " + date);

  next();
};
app.get("/", listen, (req, res) => {
  res.status(200).send("Welcome to home page");
});

app.get("/about", listen, (req, res) => {
  res.status(200).send("Welcome to the about page");
});

app.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
