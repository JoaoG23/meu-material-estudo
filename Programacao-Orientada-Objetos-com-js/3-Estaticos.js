class Pessoa {

    // Na class tem o estado do objeto;
    constructor( nome , sobrenome, idade ){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    
    nomeCompleto(){
        return `${ this.nome } ${ this.sobrenome }`
    }
}

// Class Static Nao precisamos criar uma nova instancia
// Do Objeto para utilizar somente invocar a funcao
class Matematica{
    static somar( n1 , n2 ){
        return n1 + n2;
    }
}

// Existem metodos que pode ser 
//compartilhados e nao precisam ser compartilhados
let pessoa1 = new Pessoa('Carlinhos','Jorge', 29);
let pessoa2 = new Pessoa('Luiz','Braga', 90);
let soma = Matematica.somar(pessoa1.idade, pessoa2.idade);

console.info( pessoa1.nomeCompleto() + " " + pessoa1.idade);
console.info( pessoa2.nomeCompleto() + " " + pessoa2.idade );
console.info( soma );

