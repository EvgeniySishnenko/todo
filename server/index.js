const express = require("express");
const todoRoutes = require("./routes/todo");
const sequelize = require("./utils/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/todo", todoRoutes);

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}
start();
