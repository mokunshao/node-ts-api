"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_json_1 = __importDefault(require("./posts.json"));
const todos_json_1 = __importDefault(require("./todos.json"));
class DataSource {
}
DataSource.posts = posts_json_1.default;
DataSource.todos = todos_json_1.default;
exports.DataSource = DataSource;
