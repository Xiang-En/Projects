const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import backend
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API routes from backend.js
app.post("/add", (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0;
  const num2 = parseFloat(req.body.num2) || 0;
  res.json({ result: num1 + num2 });
});

app.post("/subtract", (req, res) => {
  const num1 = parseFloat(req.body.num1) || 0;
  const num2 = parseFloat(req.body.num2) || 0;
  res.json({ result: num1 - num2 });
});

// Unit tests
describe("Testing Calculator API Responses", () => {
  test("Correct result returned from addition", async () => {
    const response = await request(app)
      .post("/add") // Send a request to the backend's /add route for addition
      .send("num1=5&num2=3") // Sends two numbers: num1 = '5' and 'num2 = '3'
      .set("Content-Type", "application/x-www-form-urlencoded"); //form data format
      
    expect(response.status).toBe(200); // Check if server responds with status code 200
    expect(response.body.result).toBe(8); //Check if returned result is correct(5 + 3 = 8)
  });

  test("Correct result returned from subtraction", async () => {
    const response = await request(app)
      .post("/subtract") // Send a request to the backend's /subtract route for subtraction
      .send("num1=10&num2=4") // Sends two numbers: num1 = '10' and 'num2 = '4'
      .set("Content-Type", "application/x-www-form-urlencoded"); //form data format

    expect(response.status).toBe(200); // Check if server responds with status code 200
    expect(response.body.result).toBe(6);//Check if returned result is correct(10 - 4 = 6)
  });

  //Send POST request to /add endpoint without input values
  test("Handling empty inputs and default to 0", async () => {
    const response = await request(app) 
      .post("/add") // Send a request to the backend's /add route for addition
      .send("") // Sends empty request body
      .set("Content-Type", "application/x-www-form-urlencoded");

    expect(response.status).toBe(200); // Check if server responds with status code 200
    expect(response.body.result).toBe(0); //Check if API defaults missing values to 0 (0 + 0 = 0)

  });
});
