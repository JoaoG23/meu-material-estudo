// Replicando o comportamento do TypeScript

// 1- Exemplo Real do que o typeScript ajuda
// Funcão comum sem tipo definido de argumento 
// function soma2Valores( a , b ) {
//     return a + b;
// }

let resultado = soma2Valores( 3 , 6); // Resultado 36 String

console.info(resultado);

// 2- Para força um tipo de dado especifico devemos fazer abaixo:

function soma2Valores( a , b ) {
    if ( typeof a === 'number' && typeof b === 'number') {
        return a +  b;
    } else {
        return 'Type wrong:  the function accept only numbers'
    }

}
