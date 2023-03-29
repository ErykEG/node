const express = require("express");
const dotenv = require("dotenv");
const candidatesRoute = require("./routes/candidates");
var cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Database Wiki");
});

app.use("/api/candidates", candidatesRoute);

app.listen(port, function () {
  console.log(`Servidor en el puerto ${port} `);
});
