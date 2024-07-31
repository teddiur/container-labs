const express = require("express");

const app = express();

app.get("/", () => {
  res.send("Hi there");
});

app.listen(8080, () => {
  console.log("Listening on port 80808");
});
