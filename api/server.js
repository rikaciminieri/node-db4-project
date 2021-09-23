const express = require("express");

const server = express();
const recipesRouter = require("./recipes/recipes-router")

server.use(express.json());

server.use("/api/recipes", recipesRouter);

server.use("*", (req, res, next) => {
  next({ status: 404, message: "Not Found" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: `${err.message}` });
});

module.exports = server;
