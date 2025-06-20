require("dotenv").config();
const express = require("express");
const app = express();

const { authRouter } = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/auth", authRouter);
app.use("/todos", todoRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
