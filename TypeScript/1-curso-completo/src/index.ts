// 1- INTRODUCAO A TIPAGEM

// Pegando os elementos do Input 
const valor1Input = document.querySelector('#v1') as HTMLInputElement; // Atribuindo tipos com AS
const valor2Input = document.querySelector('#v2') as HTMLInputElement;
const somarBtn = document.querySelector('#somar')!; // !

/**
 * Quando o eu coloco a "!" afirmo
 * para o typescript que realmente
 * o elemento existe na tela
 */

function soma(v1:number, v2:number) {
    return v1 + v2;
}

somarBtn?.addEventListener('click', () => {

    console.info(soma(Number(valor1Input.value), Number(valor2Input.value)))
})



/// 2 - TIPAGEMS

// Boolean
let isOpen: boolean;
isOpen:true;

// string ('foo', "foo", `foo`)
let message:string;
message= `foo `;

// number (int, float, hex, binary);
let total:number;
total = 0xff0;

// Array (type[])
let items: string[];
items = ['foo','bar'];

// ou forma de declaracao abaixo
let values:Array<number> 
values = [1,2,4];

// Tuple
let title: [number, string];
title = [1, 'foo'];

// Enum 
enum Color {
    white = '#fff',
    black = '#000'
}

// any = qualquer coisa;

let coisa:any;
coisa = [1];

// void (vazio)
function looger():void {
    console.info('foo');
}

// null/undefined

type Bla = string | null;

// Never nunca retorna = ele para tudo 
// throw new Error ('Error')

function error():never {
    throw new Error('error');
}

// object (nem string, array , nen bollean , number)
let cart:object;
cart = {
    key:'fi'
}


// Inferencias de TIPOS
let message2 = 'dsa'; // não precisa passar o tipo

window.addEventListener('click', (e) => {
    console.info(e.target);
})






// types alias para varias fincoes usarem o mesmo tipo
type UId = number | string;

// 3 - UNION 
function logDetails(uid:UId , item:string) {
    console.info(`A product with ${uid} has a title as ${item}`)
}

logDetails(123, 'sapato')

type Plataform = 'Windows' | 'Linux'; // Definindo valores fixos igual o enum

function renderPlataform(tipo:Plataform) {
    return tipo;
}

renderPlataform('Linux')



// 08. Estendendo Type Aliases com Intersection
/**
Introducao:
? = Opicional campo
& = E ou and - server para realizar o intescscao
*/

// accountInfo
//charInfo

type AccountInfo = {
    id:number;
    name:string;
    email?:string;
}

const account: AccountInfo = {
    id:233,
    name:'Joao',
    email:'joao@email.com',
}

type CharInfo = {
    nickname:string;
    level:number;
}

const playerInfo:CharInfo = {
    nickname:'Willian Justo',
    level:120
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id:132, 
    name:'Carlos',
    nickname:'carlin332', 
    level:20
}


// Classes

abstract  class UserAccount {
   private name:string;
   private age:number;

   constructor( name: string, age:number ){
        this.name = name;
        this.age = age;
   }

   logDetails():void {
    console.info(`The Player ${this.name} is ${this.age} years Old.`)
   }

   getName():string {
    return this.name;
   }
   setName( nome:string ) {
    this.name = nome;
   }

}

// const will = new UserAccount('Joao', 23);

class PersonAccount extends UserAccount {
    nickname:string;
    readonly level:number; // somente lida nao alterada..


    constructor(name:string, age:number , nickname:string, level:number) {
        super(name, age); // Para pegar as propriedades da class Progenitora
        this.nickname = nickname;
        this.level = level;
    }
}


const jonh = new PersonAccount('Jonh', 34, 'joabh', 34);

jonh.setName('Amarilo')
console.info(jonh.getName())