// Express Install
const express = require("express");
const app = express();
// Cors Install
const cors = require("cors");
const chefs = require("./data/chefs.json");
app.use(cors());
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send({ message: "Hello server running" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipe = chefs.find((n) => n.id == id);
  res.send(selectedRecipe);
});


app.listen(port, () => {
  console.log("server is running ");
});