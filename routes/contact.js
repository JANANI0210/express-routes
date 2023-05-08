const express = require("express");
const contactRouter = express.Router();

contactRouter.get("/", (request, response) => {
  response.send("Contact");
});

module.exports = contactRouter;
