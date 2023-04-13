const express = require("express");
const dotenv = require("dotenv");

var cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());


const candidatesRoute = require("./routes/candidates");
const projectRoute = require("./routes/project");
const projectUser = require("./routes/user");
const projectMatches = require("./routes/match");
const projectDem = require("./routes/demand");
const projectProf = require("./routes/profile_project");
const candStackRoute = require("./routes/candstack");
const stackRoute = require("./routes/stack");
const dStackRoute = require("./routes/dstack");
const projDemRoute = require("./routes/prodem");
const recruitRoute = require("./routes/recruit");
const proRecRoute = require("./routes/project_rec");




app.get("/", function (req, res) {
  res.send("Database Wiki");
});


app.use("/api/candidates", candidatesRoute);

app.use("/api/project", projectRoute);

app.use("/api/user", projectUser);

app.use("/api/matches", projectMatches);

app.use("/api/demand", projectDem);

app.use("/api/profile_project", projectProf);

app.use("/api/cs", candStackRoute);

app.use("/api/stack", stackRoute);

app.use("/api/demand-stack", dStackRoute);

app.use("/api/proj-dem", projDemRoute);

app.use("/api/recruiters", recruitRoute);

app.use("/api/project-recruits", proRecRoute);

app.listen(port, function () {
  console.log(`Servidor en el puerto ${port} `);
});
