"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    Index(req, res) {
        res.send('Hello');
    }
}
exports.indexController = new IndexController();
