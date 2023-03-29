const express = require("express");
const sql = require("mssql");

const router = express.Router();

router.get("/", async (req, res) => {
  await sql.connect(process.env.DB_CONNECTION);

  const result = await sql.query`select * from candidates`;

  res.json(result.recordset);
});

router.get("/test", (req, res) => {
  res.json({ test: "test" });
});

router.post("/test", (req, res) => {
  res.json({ test: "test" });
});

module.exports = router;
