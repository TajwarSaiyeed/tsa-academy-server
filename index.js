const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const cources = require("./data/cources.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cources", (req, res) => {
  res.send(cources);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
