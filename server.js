const express = require("express");
const api = require("./routes/api");

const PORT = process.env.PORT || 4200;
const app = express();

app.use("/api", api.routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
