const express = require("express");
const router = express.Router();

const {
  getAllPeople,
  getPeopleWithId,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople,
} = require("../controller/people");

//creating the routes seperately

// router.get("/", getAllPeople);

// router.get("/:id", getPeopleWithId);

// //post routes
// router.post("/", createPeople);

// router.post("/postman", createPeoplePostman);

// //put routes for updaing the user details

// router.put("/:id", updatePeople);

// router.delete("/:id", deletePeople);

//creating the routes in nested manner with route
router.route("/").get(getAllPeople).post(createPeople);
router.route("/postman").post(createPeoplePostman);
router
  .route("/:id")
  .get(getPeopleWithId)
  .put(updatePeople)
  .delete(deletePeople);

module.exports = router;
