const express = require("express");
const servicesRouter = express.Router();

servicesRouter.get("/", (request, response) => {
  response.send("Our Services");
});

module.exports = servicesRouter;
