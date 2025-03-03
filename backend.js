const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5500;  // Port Number

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());  // This allows the frontend to connect with backend

// POST route for addition
app.post("/add", (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0; // Extract 1st number, convert to 0. If empty or NA, default to 0
  const num2 = parseFloat(req.body.num2) || 0; // Extract 2nd number, convert to 0. If empty or NA, default to 0
  res.json({ result: num1 + num2 }); // Add both numbers and return result as JSON response
});

//POST route for subtraction
app.post("/subtract", (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0; // Extract 1st number, convert to 0. If empty or NA, default to 0
  const num2 = parseFloat(req.body.num2) || 0; // Extract 2nd number, convert to 0. If empty or NA, default to 0
  res.json({ result: num1 - num2 }); // Subtract both numbers and return result as JSON response
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});