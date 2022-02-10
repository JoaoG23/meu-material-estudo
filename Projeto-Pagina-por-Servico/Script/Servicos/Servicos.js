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

          return 'Tem algo (ERRADO) no seu código X!';
        } else {
      
         return 'SUA VARIAVEL: ' + variavel + ' FUNCIONOU !';
          // --- Extrair o valor de dentro da variavel funcao = Achar1Filho
        }
      },
      
      Achar1Filho:( pai ) => {
        console.log(pai.children);
      }

}
const TRANSICAO_ELEMENTOS = {

    Desparecer_pela_direita:( elemento  ) => {
        // Regra Para Paginacao funcao
        // 1 - Uma funcao pura, possivel sirva para todos elemento
        /* 2- Transicao valores de execulsao Ex: transistion, left serao na funcao
         e nao nao class especifica do objeto */
    
        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.position = "relative"
    
        elemento.style.transform = "translateX(100%)";
        
        // elemento.setAttribute("class", "posicao-final"); 
    },
    Aparecer_pela_direita:( elemento ) => {

        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.transform = "translateX(0%)";
          
    },
    
    // ---defeito---
    Aumento:( elemento  ) => {
    
        elemento.style.transition = "0.4s";
        elemento.style.opacity = "1"
        elemento.style.width = "100%";
        
    
    },

    Diminuicao:( elemento  ) => {

    
        elemento.style.transition = "0.4s";
        elemento.style.opacity = "0"
        elemento.style.width = "0%";
        
    
    }


    // AparecerEsquerda:( elemento ) => {

    //     elemento.style.transition = "0.4s";
    //     elemento.style.opacity = "1"
    //     elemento.style.transform = "translateX(-100%)";
          
    // },

    // DesparecerEsquerda:( elemento ) => {

    //     elemento.style.transition = "0.4s";
    //     elemento.style.opacity = "1";
    //     elemento.style.transform = "translateX(0%)";
          
    // },
    // AparecerBaixoParaCima:( elemento ) => {

    //     elemento.style.transition = "0.4s";
    //     elemento.style.opacity = "1"
    //     elemento.style.transform = "translateY(11000wv)";
          
    // },
    // DesaparecerCimaParaBaixo:( elemento ) => {

    //     elemento.style.transition = "0.4s";
    //     elemento.style.opacity = "1"
    //     elemento.style.transform = "translateY(-100%)";
          
    // }

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

    formularioGenerico: ( root ) => {
        
        let resultadoTemplate = `
        <form>
        <div>
            <label>Item</label>
            <input name="item1" type="text" placeholder="Digite o Item0">
        </div>
        <div>
            <label>Item1</label>
            <input name="item1" type="text" placeholder="Digite o Item1">
        </div>
        <div>
            <label>Item2</label>
            <input name="item2" type="text" placeholder="Digite o Item2">
        </div>
        <div>
            <label>Item3</label>
            <input name="item3" type="text" placeholder="Digite o Item3">
        </div>
        <div>
            <label>Item4</label>
            <input name="item4" type="text" placeholder="Digite o Item4">
        </div>
        <div>
            <label>Item5</label>
            <input name="item5" type="text" placeholder="Digite o Item5">
        </div>
        <div>
            <label>Numero1</label>
            <input name="numero1" type="number" placeholder="Digite o numero1">
        </div>
        <div>
            <label>Tel</label>
            <input name="telefone" type="tel" placeholder="Digite o Telefone">
        </div>
        <div>
            <label>url</label>
            <input name="url" type="url" placeholder="Digite o Endereco Site">
        </div>
        <div>
            <label>Data e hora</label>
            <input name="data" type="datetime" placeholder="Digite o Data e hora">
        </div>
        <div>
            <label>Imagens</label>
            <input name="images" type="image" placeholder="Ache a imagen">
        </div>
        <div>
            <label>Arquivo</label>
            <input name="files" type="file" placeholder="Upload do arquivo">
        </div>
        <div>
            <label>Ligar dados</label>
            <input name="checkbox1" type="checkbox" placeholder="checkbox">
        </div>
        <button>Enviar</button>
    </form>`;

        root.innerHTML = resultadoTemplate;
        
        
    },

    CriaNavBar: ( root ) => {
        
        let resultadoTemplate = `
        `;

        root.innerHTML = resultadoTemplate;
        
        
    },
https://www.youtube.com/watch?v=YPWl29sKFsQ

}
