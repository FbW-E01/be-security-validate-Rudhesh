import express from "express";
import userValidators from "./validators/userValidators.js";
import { validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[Req] ${req.method}${req.path}`);
  next();
});

const record = [];

app.post(
  "/birds",
  userValidators,
  (req, res, next) => {
    next();
  },
  (req, res) => {
    console.log(req.body);
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400);
      res.json({ errors: result.errors });
      return;
    }
    const records = {
      species: req.body.species,
      notes: req.body.notes,
      estimatedAmount: req.body.estimatedAmount,
    };
    record.push(records);
  }
);

app.get("/birds", (req, res) => {
  res.send(record);
  console.log(record);
});

app.listen(9090, () => {
  console.log("listening request on http://localhost:9090");
});
