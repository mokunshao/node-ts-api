"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data/data");
console.log(data_1.DataSource);
const app = express_1.default();
app.listen(process.env.PORT || 8091, () => {
    console.log(`server started...`);
});
app.get("/posts", (req, res, next) => {
    res.json(data_1.DataSource.posts);
});
app.get("/todos", (req, res, next) => {
    res.json(data_1.DataSource.todos);
});
