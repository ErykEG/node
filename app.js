const express = require("express");
const dotenv = require("dotenv");
const expensesRoute = require("./routes/expenses");
var cors = require("cors");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use("/api/expenses", expensesRoute);

app.listen(port, function () {
  console.log(`Servidor en el puerto ${port} `);
});
