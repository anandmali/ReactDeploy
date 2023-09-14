const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Home Route from the node server");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
