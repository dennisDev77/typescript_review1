"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//Body parse
app.use(express_1.default.json());
const users = [];
//   Put users
app.post('/user', (req, res) => {
    const { firstName, lastName, age, state, province } = req.body;
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        address: {
            state: state,
            province: province
        },
    };
    users.push(newUser);
    res.status(201).json({ message: "User add", users });
});
//show users
app.get('/user', (req, res) => {
    const newUser = {
        firstName: "Dinis",
        lastName: "Camela",
        age: 19,
        address: {
            state: 'Luanda',
            province: 'Luanda'
        },
    };
    users.push(newUser);
    res.status(200).json({ message: "Users show", users });
});
// port listen 3000
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
