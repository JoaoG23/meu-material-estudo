"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../schemas/Post"));
class PostController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield Post_1.default.find();
                return res.json(posts);
            }
            catch (error) {
                console.error(error);
                return res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addPost = yield Post_1.default.create(req.body);
                return res.json(addPost);
            }
            catch (error) {
                console.error(error);
                return res.json(error);
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idEncontrado = req.params.id;
                const deletePost = yield Post_1.default.findOneAndDelete({ _id: idEncontrado });
                return res.json(deletePost);
            }
            catch (error) {
                console.error(error);
                return res.json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idEncontrado = req.params.id;
                const newPost = {
                    nome: req.body.nome,
                    descricao: req.body.descricao,
                    dataEntrega: req.body.dataEntrega,
                };
                const updatePost = yield Post_1.default.updateOne({ _id: idEncontrado }, newPost);
                return res.json(updatePost);
            }
            catch (error) {
                console.error(error);
                return res.json(error);
            }
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=PostContoller.js.map