"use strict";
const valor1Input = document.querySelector('#v1');
const valor2Input = document.querySelector('#v2');
const somarBtn = document.querySelector('#somar');
function soma(v1, v2) {
    return v1 + v2;
}
somarBtn === null || somarBtn === void 0 ? void 0 : somarBtn.addEventListener('click', () => {
    console.info(soma(Number(valor1Input.value), Number(valor2Input.value)));
});
let isOpen;
isOpen: true;
let message;
message = `foo `;
let total;
total = 0xff0;
let items;
items = ['foo', 'bar'];
let values;
values = [1, 2, 4];
let title;
title = [1, 'foo'];
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
let coisa;
coisa = [1];
function looger() {
    console.info('foo');
}
function error() {
    throw new Error('error');
}
let cart;
cart = {
    key: 'fi'
};
let message2 = 'dsa';
window.addEventListener('click', (e) => {
    console.info(e.target);
});
function logDetails(uid, item) {
    console.info(`A product with ${uid} has a title as ${item}`);
}
logDetails(123, 'sapato');
function renderPlataform(tipo) {
    return tipo;
}
renderPlataform('Linux');
const account = {
    id: 233,
    name: 'Joao',
    email: 'joao@email.com',
};
const playerInfo = {
    nickname: 'Willian Justo',
    level: 120
};
const player = {
    id: 132,
    name: 'Carlos',
    nickname: 'carlin332',
    level: 20
};
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.info(`The Player ${this.name} is ${this.age} years Old.`);
    }
    getName() {
        return this.name;
    }
    setName(nome) {
        this.name = nome;
    }
}
class PersonAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const jonh = new PersonAccount('Jonh', 34, 'joabh', 34);
jonh.setName('Amarilo');
console.info(jonh.getName());
//# sourceMappingURL=index.js.map