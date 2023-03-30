const express = require("express");
const dotenv = require("dotenv");
const candidatesRoute = require("./routes/candidates");
const projectRoute = require("./routes/project");
const projectUser = require("./routes/user");
const projectMatches = require("./routes/match");
const projectDem = require("./routes/demand");
var cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Database Wiki");
});

app.use("/api/candidates", candidatesRoute);

app.use("/api/project", projectRoute);

app.use("/api/user", projectUser);

app.use("/api/matches", projectMatches);

app.use("/api/demand", projectDem);

app.listen(port, function () {
  console.log(`Servidor en el puerto ${port} `);
});
