"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
    }
    database() {
        mongoose_1.default.connect('mongodb://localhost:27017/dbkanban', {
        // useNewUrlParser:true
        });
    }
    routes() {
        this.express.use(routes_1.default);
        this.express.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
        // PARA TESTES 
        // this.express.get('/', (req, res) => {
        //     return res.send('Ola Testando .....')
        // })
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map