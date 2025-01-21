"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/produto', (req, res) => {
    return res.send('Nossos produtos');
});
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
