const express = require("express");
const app = express();

const peopleRoute = require("./routes/people");
const authRoute = require("./routes/auth");

//the methods that we are having in the express and common http are
//get -> to get all the resources
//post -> insert the data
//put -> update the data
//delete -> to delete the resource

//midlleware for static assets and handling the request body
app.use(express.static("./methods-public"));

//for parsing the form data
app.use(express.urlencoded({ extended: false }));

//for parsing json
app.use(express.json());

//router for login route
app.use("/login", authRoute);
//router for the /api/people
app.use("/api/people", peopleRoute);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
