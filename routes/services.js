const express = require("express");
const servicesRouter = express.Router();

let listOfservices = [
  {
    id: 1,
    name: "Web Development",
  },

  {
    id: 2,
    name: "Cloud Computing",
  },

  {
    id: 3,
    name: "UI/UX Design",
  },

  {
    id: 4,
    name: "Block Chain",
  },

  {
    id: 5,
    name: "Digital Marketing",
  },

  {
    id: 6,
    name: "Cyber Security",
  },
];

servicesRouter.get("/", (request, response) => {
  response.send("Services");
});

servicesRouter.get("/:id", (request, response) => {
  const serviceId = Number(request.params.id);
  const getService = listOfservices.find((service) => {
    return service.id === serviceId;
  });

  if (!getService) {
    response.status(500).send("Expected service not found");
    console.log(request.params.id);
  } else {
    response.json(getService);
  }
});
module.exports = servicesRouter;
