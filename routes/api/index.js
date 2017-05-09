const express = require("express");
const apiRoutes = express.Router();
const json = require("../mock-data.json");

apiRoutes.get("/mock", (req, res) => {
  res.send(json);
});

apiRoutes.post("/mock", (req, res) => {
  if (json[0].first === "Leena") {
    json[0].first = "Lee";
  } else {
    json[0].first = "Leena";
  }
  res.send(json);
});

exports.routes = apiRoutes;
