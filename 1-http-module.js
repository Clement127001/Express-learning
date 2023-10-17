const http = require("http");

const newServer = http.createServer((req, res) => {
  res.end("Welcome, I am currently learning the basic of express");
});

newServer.listen(3000, () => {
  console.log("The app is running");
});
