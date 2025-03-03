// Function to handle operation
function calculate(operationType) {
    const num1 = document.getElementById("num1").value || 0;
    const num2 = document.getElementById("num2").value || 0;
  
    //POST request to backend API
    fetch(`http://localhost:5500/${operationType}`, {  
      method: "POST", //POST method to send data
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Specifying form data format
      body: `num1=${encodeURIComponent(num1)}&num2=${encodeURIComponent(num2)}` // Encode and send data
    })
      .then(response => response.json()) // Parse as JSON response
      .then(data => {
        // Update the displayed operation (e.g., "6 + 6" or "8 - 2")
        document.getElementById("operation").textContent = `${num1} ${operationType === "add" ? "+" : "-"} ${num2} =`;
        // Update the result with the returned value from the server
        document.getElementById("result").textContent = data.result;
      })
      .catch(error => console.error("Error:", error));
  }