"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    nome: String,
    descricao: String,
    status: Number,
    dataEntrega: { type: Date, default: Date.now },
    dataCriacao: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Post', PostSchema);
//# sourceMappingURL=Post.js.map