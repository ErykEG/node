const express = require("express");
const sql = require("mssql");



const router = express.Router();

router.get("/gc", async (req, res) => {
  await sql.connect(process.env.DB_CONNECTION);

  const result =
    await sql.query`SELECT COLUMN_NAME 
    FROM INFORMATION_SCHEMA.COLUMNS 
    WHERE TABLE_NAME = 'Candidates';`;

  res.json(result.recordset);
});



router.post('/q1', async (req, res) => {
  try {
    const variable2 = req.body.variable2;

    console.log(variable2);

    const pool = await sql.connect(process.env.DB_CONNECTION);

    const result = await pool.request()
      .input('variable', sql.NVarChar(300), variable2)
      .query(`SELECT * FROM Candidates WHERE Name_Candidates like '%'${variable2}`);

      console.log(result.recordset);
    res.send(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request');
  }
});

router.post('/q2', async (req, res) => {
  try {
    const variable = req.body.variable;

    console.log(variable);

    const pool = await sql.connect(process.env.DB_CONNECTION);

    const result = await pool.request()
      .input('variable', sql.NVarChar(100), variable)
      .query(`SELECT DISTINCT ${variable} FROM Candidates`);

    res.send(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request');
  }
});

router.post('/q3', async (req, res) => {
  try {
    const variable3 = req.body.variable3;

    console.log(variable3);

    const pool = await sql.connect(process.env.DB_CONNECTION);

    const result = await pool.request()
      .input('variable', sql.NVarChar(100), variable3)
      .query(`SELECT DISTINCT Id_Projects_Short, Name_Projects_Short FROM Projects_Short WHERE Email_Creator like '${variable3}'`);

    res.send(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request');
  }
});




router.post("/add", async (req, res) => {
  try {

    const pool = await sql.connect(process.env.DB_CONNECTION);

    const result = await pool
      .request()
      .input("title", sql.VarChar, req.body.title)
      .input("amount", sql.Decimal, req.body.amount)
      .query(
        "INSERT INTO [dbo].[Profiles] ([Id_Profiles], [Name_Profiles], [Email_Profiles], [Permit_Profiles]) VALUES (@amount, @title, 'correo', 3)"
      );
console.log(result)
    res.send("Expense added successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/test", (req, res) => {
  res.json({ test: "test" });
});

router.post("/test", (req, res) => {
  res.json({ test: "test" });
});

module.exports = router;
