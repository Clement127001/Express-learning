const express = require("express");
const path = require("path");
const app = express();

//when comparing to http resources we will have the static folder called public

//the public folder will have all the static files for the web page
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h3>Page not found</h3>");
});

app.listen(3000, () => {
  console.log("The app is listening on port 3000");
});
