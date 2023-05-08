const express = require("express");
const paymentRouter = express.Router();

paymentRouter.get("/", (request, response) => {
  response.send("Payments");
});

module.exports = paymentRouter;
