const express = require("express");
const userRouter = express.Router();

const listOfUsers = [
  {
    name: "Azyan",
  },

  {
    name: "Bizaire",
  },

  {
    name: "Cyann",
  },
];
// userRouter.get("/", (request, response) => {
//   response.send("List of users");
// })

userRouter.get("/new", (request, response) => {
  response.render("users/new");
});
userRouter.post("/", (request, response) => {
  listOfUsers.push({ name: request.body.firstname });
  response.redirect(`/users/${listOfUsers.length}`);
});
userRouter.get("/:id([0-9]{1})", (request, response) => {
  response.send(`${request.user.name} with id ${request.params.id}`);
});
userRouter.param("id", (request, response, next, id) => {
  request.user = listOfUsers[id - 1];
  next();
});

module.exports = userRouter;
