const express = require("express");
const sql = require("mssql");

const router = express.Router();

router.get("/:variable", async (req, res) => {
  await sql.connect(process.env.DB_CONNECTION);
  const myVariable = req.params.variable;
  const result =
    await sql.query`SELECT * FROM ${myVariable}`;

  res.json(result.recordset);
  // use the query to fetch data from your database
});
