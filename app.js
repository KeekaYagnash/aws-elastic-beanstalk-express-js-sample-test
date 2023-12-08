const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Handle the root URL
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);

// Start the server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
