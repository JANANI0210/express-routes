const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get("/", (request, response) => {
  response.send("About US");
});

module.exports = aboutRouter;
