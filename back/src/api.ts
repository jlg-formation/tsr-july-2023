import express from "express";

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({
    multiplicationFactor: 23,
    samples: 100,
  });
});

export default app;
