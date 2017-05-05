const express = require("express");
const json = require("./mock-data.json");

const PORT = 4200;

const app = express();

app.get("/api/mock", (req, res) => {
  res.send(json);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
