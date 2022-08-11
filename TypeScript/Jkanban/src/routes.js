"use strict";
exports.__esModule = true;
var express_1 = require("express");
var PostContoller_1 = require("./controllers/PostContoller");
var routes = (0, express_1.Router)();
// routes.get('/posts', PostContoller.index);
routes.get('/status', PostContoller_1["default"].findForStatus);
routes.post('/posts', PostContoller_1["default"].create);
routes.put('/posts/:id', PostContoller_1["default"].update);
routes["delete"]('/posts/:id', PostContoller_1["default"].remove);
exports["default"] = routes;