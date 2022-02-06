//    window.onload =  () => { TEMPLATES.CriaNavBar(rootNavBar) }
//     // document.addEventListener('load', () => { 
//     //   TEMPLATES.CriaNavBar(rootNavBar);
//     // });
// ------ Services ------

/*
    Camada de Serviço usada para
    Servir a camada de HTML com 
    serviços(ou funções) que pode 
    ser usadas e acessadas pelo 
    controlador de Eventos.


*/
const TESTES = {

    TesteVariavel:( variavel ) => {

        if (!variavel) {

          console.log('Tem algo (ERRADO) no seu código X!');
        } else {
      
          console.log('SUA VARIAVEL: ' + variavel + ' FUNCIONOU !');
          // --- Extrair o valor de dentro da variavel funcao = Achar1Filho
        }
      },
      
      Achar1Filho:( pai ) => {
        console.log(pai.children);
      }

}
const TRANSICAO_ELEMENTOS = {

    DesaparecerDireita:( elemento  ) => {
        // Regra Para Paginacao funcao
        // 1 - Uma funcao pura, possivel sirva para todos elemento
        /* 2- Transicao valores de execulsao Ex: transistion, left serao na funcao
         e nao nao class especifica do objeto */
    
        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.transform = "translateX(100%)";
        
        // elemento.setAttribute("class", "posicao-final"); 
    },

    AumentoDireita:( elemento  ) => {
    
        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.width = "100%";
        
    
    },
    DiminuicaoDireita:( elemento  ) => {

    
        elemento.style.transition = "0.4s";
        elemento.style.opacity = "0"
        elemento.style.width = "0%";
        
    
    },

    AparecerDireita:( elemento ) => {

        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.transform = "translateX(0%)";
          
    },

    AparecerEsquerda:( elemento ) => {

        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.transform = "translateX(-100%)";
          
    },

    DesparecerEsquerda:( elemento ) => {

        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1";
        elemento.style.transform = "translateX(0%)";
          
    },
    AparecerBaixoParaCima:( elemento ) => {

        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.transform = "translateY(11000wv)";
          
    },
    DesaparecerCimaParaBaixo:( elemento ) => {

        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.transform = "translateY(-100%)";
          
    }

}

const ENTRADA_DADOS = {

    Mascara:( elemento, tipoSeparador ) => {
        let elementoInput = elemento;

        if( elementoInput.value.length == 3 ||  elementoInput.value.length == 7 ){
            elementoInput.value += tipoSeparador;

        } else if (  elementoInput.value.length == 11) {
            elementoInput.value += tipoSeparador;

        }
    }
}


const TEMPLATES = {

    CaixaComBtns: ( root ) => {
        
        let resultadoTemplate = `
        <div class="" >
            <input type="button" placeholder="Clique aqui">
            <input type="time" placeholder="Digite o Tempo em segs">
            <input type="text" placeholder="Digite aqui a mensagen">
        </div>`;

        root.innerHTML = resultadoTemplate;
        
        
    },

    CriaNavBar: ( root ) => {
        
        let resultadoTemplate = `
        `;

        root.innerHTML = resultadoTemplate;
        
        
    },


}