import express from "express";
const app = express();
app.listen(process.env.PORT || 8091, () => {
  console.log(`server started...`);
});
app.get("/", (req, res, next) => {
  res.send("you can see me now");
});
