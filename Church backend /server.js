const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files (for React, HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Fallback route for Single Page Apps (React/Vue)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
