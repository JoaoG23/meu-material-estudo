 import React from 'react';
 import Menus from './Menu';
import App from './App';
 import './App.css'



// MODELO USANDO CLASSEs
 

class Header extends React.Component {
// Herda as caracteristica do React

    // Quando e criando uma class e criando o proprio construto da class
    constructor(props) {
        super(props);
    }

        render() {// O que rendeniza o meu metodo
            return (// o THIS para fazer refencia a estancia do objeto exemplo abaixo
                <header className='header verm'> 
                  <h1>{this.props.nome}</h1> 
                      <Menus links={this.props.links}></Menus>
                </header>
                );
        }
}
 export default Header; // 3 - exportando Header.js
/// -------------REVISAO do Aprendizado -----------
 // 1 - Criando Componente
 // 1 - Criar Arquivo javascript ex: headerjs
//  2 - Importar React La em cima 
//  3 - Importa App.js e App.class com sua classe
//  4 - Criar uma funcão com o html dentro dela 
//  5 - exportar o default a funcao
//  6 - Colocar a funcao dentro componente App 
//  7 - Colocar atributos  = propriedade no HTML no Componente
// ex: props.nome