const express = require("express");
const json = require("./mock-data.json");

const PORT = 4200;

const app = express();

app.get("/api/mock", (req, res) => {
  res.send(json);
});

app.post("/api/mock", (req, res) => {
  if (json[0].first === "Leena") {
    json[0].first = "Lee";
  } else {
    json[0].first = "Leena";
  }
  res.send(json);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
