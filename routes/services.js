const express = require("express");
const servicesRouter = express.Router();

let listOfservices = [
  {
    name: "Web Development",
  },

  {
    name: "Cloud Computing",
  },

  {
    name: "UI/UX Design",
  },

  {
    name: "Block Chain",
  },

  {
    name: "Digital Marketing",
  },

  {
    name: "Cyber Security",
  },
];

servicesRouter.get("/", (request, response) => {
  response.send("Services");
});

// servicesRouter.get("/:id", (request, response) => {
//   const serviceId = Number(request.params.id);
//   const getService = listOfservices.find((service) => {
//     return service.id === serviceId;
//   });

//   if (!getService) {
//     response.status(500).send("Expected service not found");
//     console.log(request.params.id);
//   } else {
//     response.json(getService);
//   }
// });

servicesRouter.get("/new-service", (request, response) => {
  response.render("services/new-service");
});
servicesRouter.post("/", (request, response) => {
  listOfservices.push({
    name: request.body.name,
    cost: request.body.cost,
    time: request.body.time,
  });
  response.redirect(`/services/${listOfservices.length}`);
});

// servicesRouter.get("/new-service", (request, response) => {
//   response.render("new-service");
// });

servicesRouter.get("/:id", (request, response) => {
  response.send(
    `Service with id ${request.params.id} has name ${request.services.name}`
  );
  response.send(
    `Service with id ${request.params.id} has name ${request.services.name} has cost ${request.services.cost} and time ${request.services.time}`
  );
});
servicesRouter.get("/:id([0-9]{1})", (request, response) => {
  response.send(request.service.name);
});

servicesRouter.param("id", (request, response, next, id) => {
  request.service = listOfservices[id - 1];
  next();
});
module.exports = servicesRouter;
