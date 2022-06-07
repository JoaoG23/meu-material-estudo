// ---- 1 -- Aprendendo a criar uma class ----

class Pessoa {
    constructor(nome, sobrenome, email = 'sem@email.com'){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
    }
    
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}
console.info(joao);
console.info(joao.nomeCompleto());
console.info(charlene);

// Observações interessantes;

// As class diferentemente das functions não funcionam com 
// com o HOISTING Exenplo abaixo: 

// --- Tente execultar o codigo abaixo para ver o que acontece!

// let joao = new Pessoa('Joao','Guilherme','joao@email.com');
// let charlene = new Pessoa('Charlene','Suma');

// console.info(joao);
// console.info(joao.nomeCompleto());
// console.info(charlene);

// class Pessoa {
//     constructor(nome, sobrenome, email = 'sem@email.com'){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.email = email;
//     }
    
//     nomeCompleto(){
//         return `${this.nome} ${this.sobrenome}`
//     }
// }

// DEU ERRO não é ? !
// Isso é devido difereVnte da funcao, as class devem ser exercultadas
// apos a serem declarada acima, assim elas nao funcionam.


// Ja Com a funcao 
// Descomente o codigo abaixo é exerculte :
// let joao = new Pessoa('Joao','Guilherme','joao@email.com');
// let charlene = new Pessoa('Charlene','Suma');

// console.info(joao);
// console.info(joao.nomeCompleto());
// console.info(charlene);

// function Pessoa(nome, sobrenome, email = 'sem Email') {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.email = email;

//     this.nomeCompleto = function() {
//         return `${this.nome} ${this.sobrenome}`;
//     }
// }