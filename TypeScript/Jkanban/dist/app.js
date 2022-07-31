"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoose_1 = require("mongoose");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
    }
    database() {
        mongoose_1.default.connect('mongodb://localhost:27017/dbkanban', {
        // useNewUrlParser:true
        });
    }
    routes() {
        this.express.use(routes_1.default);
        // PARA TESTES 
        // this.express.get('/', (req, res) => {
        //     return res.send('Ola Testando .....')
        // })
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map