const express = require("express");
const app = express();
const { people } = require("./data");

//the methods that we are having in the express and common http are
//get -> to get all the resources
//post -> insert the data
//put -> update the data
//delete -> to delete the resource

//midlleware for static assets and handling the request body
app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) res.status(200).send(`welcome ${name}`);

  res.status(401).send("Please provide the user details");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
