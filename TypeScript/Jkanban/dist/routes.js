"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostContoller_1 = require("./controllers/PostContoller");
const routes = (0, express_1.Router)();
// routes.get('/posts', PostContoller.index);
routes.get('/status', PostContoller_1.default.findForStatus);
routes.post('/posts', PostContoller_1.default.create);
routes.put('/posts/:id', PostContoller_1.default.update);
routes.delete('/posts/:id', PostContoller_1.default.remove);
exports.default = routes;
//# sourceMappingURL=routes.js.map