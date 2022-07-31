"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostContoller_1 = __importDefault(require("./controllers/PostContoller"));
const routes = (0, express_1.Router)();
routes.get('/posts', PostContoller_1.default.index);
routes.post('/posts', PostContoller_1.default.create);
routes.put('/posts/:id', PostContoller_1.default.update);
routes.delete('/posts/:id', PostContoller_1.default.remove);
exports.default = routes;
//# sourceMappingURL=routes.js.map