const express = require("express");
const app = express();

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const PORT = 3000;

app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
