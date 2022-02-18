// ----- 2- Funcao de Primeira Ordem ---- 
/****
 * Quando a linguagem permite que a funcao 
 * Opere usando outras funcaos .
 * Callback. Uma funcao retornado outra funcao
 */

function run(fn) {
    return `O resultado é : ${fn()}`
}
function dizerOla() {
    console.log('Holla!');

}

// 1- Invocar com argumento = 3
// run(3) // Ira Reclamar - Devido :Leia abaixo:
/***
 * Acima a funcao espera receber
 * Una outra funcao e nao um valor 
 * ou uma variavel
 */

// 2 - Passando somen te a referencia da funcao acima
 run(dizerOla);


//  ----------- Outra possibilidade ------
// Passando uma funcao junto com e scopo dela dentro da funcao

run(function(){

    console.log('Rodar')

});

const result = run(Math.random);
console.log(result);
