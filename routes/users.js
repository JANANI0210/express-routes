const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (request, response) => {
  response.send("List of users");
});

module.exports = userRouter;
