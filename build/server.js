"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.listen(process.env.PORT || 8091, () => {
    console.log(`server started...`);
});
app.get("/", (req, res, next) => {
    res.send("you can see me now");
});
