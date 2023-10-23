const express = require("express");
const router = express.Router();

const { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = people.find((per) => per.id === id);
  if (!person) return res.status(404).send(`No person found with id:${id}`);

  return res.status(200).json({ success: true, data: person });
});

//post routes
router.post("/", (req, res) => {
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

router.post("/postman", (req, res) => {
  const { name } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ success: false, msg: "please provide the data for storing" });

  res.status(201).json({ sucess: true, data: [...people, { name }] });
});

//put routes for updaing the user details

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  //finding the person with that given id

  const person = people.find((person) => person.id === Number(id));

  if (!person) return res.status(404).send(`No person found with id:${id}`);

  if (!name) {
    return res.status(400).send("Provide the valid user name");
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) person.name = name;

    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = people.find((person) => person.id === id);

  if (!person) return res.status(404).send(`User not exists with id : ${id}`);

  const newPeople = people.filter((person) => person.id !== id);

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
