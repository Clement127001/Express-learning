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

//for parsing the form data
app.use(express.urlencoded({ extended: false }));

//for parsing json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  console.log(name);

  if (!name)
    return res
      .status(400)
      .json({ sucess: false, msg: "please provide the valid name" });

  //the data is obtained using the reponse that is send by the post request, handled via the variable used
  res.status(201).json({ success: true, person: name });
  //   res.status(201).send("The data is obtained");
});

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) res.status(200).json({ name });

  res.status(401).send("Please provide the user details");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
