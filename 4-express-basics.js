const express = require("express");

const app = express();

//express contain the basic methods like

//a -> this all are http verb and server will listen to and get the verb for us
//app.get
//app.post
//app.put
//app.delete
//app.all

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.statusMessage = "Success";
  res.send("Welcome to our basic application");
});

app.get("/about", (req, res) => {
  res.statusCode = 200;
  //   res.statusMessage = "successfully fetched about page";
  res.send("This is our brand new about page");
});

//for all routes other than above are considered as 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
//b -> middleware
//app.use

//c -> for listening
//app.listen

app.listen(3000, () => {
  console.log("The server is listening of port : 3000");
});
