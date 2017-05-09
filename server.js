const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 4200;
const app = express();

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
