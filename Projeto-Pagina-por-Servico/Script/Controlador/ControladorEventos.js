// Controller Events

/****
  Uma camada que controla todos
  os eventos, intermediando
  os eventos para que nenhum
  serviço seja acessado diretamente
  no HTML, fiz isso com o intuito
  de reaproveitamento de codigo 
  com mais facilidade em outros 
  projetos meus (:
    ....
    */

/****
 * ----NOTAS IMPORTANTE----
 * 1- Problema: Ao pegar o dado pelo
 * ID quando o elemento colocado pelo
 * serviço de templates = Estudar o 
 * o DOM melhor.
 */


let dados = {
  navbar : [
    { id: 1, dado: 'Home' },
    { id: 2, dado: 'Documentos' },
    { id: 3, dado: 'Locais' },
    { id: 4, dado: 'Configuracao' },
    { id: 5, dado: 'Servicos' },
    { id: 6, dado: 'Dados' },
    { id: 7, dado: 'login' }
  ]
}

// var conta = {
//   ag: '0000',
//   banco: {
//     cod: 033,
//     id: 9,
//     nome: 'Santander'
//   }
// }

let elementoTela = document.getElementById("elementoTeste");

let btn1 = document.getElementById("btnAparecerDir");
let btn2 = document.getElementById("btnDesaparecerDir");
let btn3 = document.getElementById("btnAparecerEsq");



let rootVariavel = document.querySelector("#root");
let rootNavBar = document.querySelector("#rootnavbar");

btn2.onclick = () => { TRANSICAO_ELEMENTOS.DiminuicaoDireita(elementoTela) }


btn1.onclick = () => { TRANSICAO_ELEMENTOS.AumentoDireita(elementoTela), TEMPLATES.CaixaComBtns(elementoTela) } // Add transicao + elementos na tela
btn3.onclick = () => { TRANSICAO_ELEMENTOS.DiminuicaoDireita(elementoTela) }