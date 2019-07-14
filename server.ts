import express from "express";
import { DataSource } from "./data/data";
console.log(DataSource);
const app = express();
app.listen(process.env.PORT || 8091, () => {
  console.log(`server started...`);
});
app.get("/posts", (req, res, next) => {
  res.json(DataSource.posts);
});
app.get("/todos", (req, res, next) => {
  res.json(DataSource.todos);
});
