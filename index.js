const express = require("express");
const route = require("./routes/index");

const app = express();

app.use("/api", route);

app.listen(8000, (err) => {
  if (err) {
    console.log("Failed to connect");
  } else {
    console.log("App is Running on port 8000");
  }
});
