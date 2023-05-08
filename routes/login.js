const express = require("express");
const loginRouter = express.Router();

loginRouter.get("/", (request, response) => {
  response.send("Login/Sign up");
});

module.exports = loginRouter;
