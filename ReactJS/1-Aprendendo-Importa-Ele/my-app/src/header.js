 import React from 'react'
import App from './App';
 import './App.css'

 function Header(props) {
     return (
<header className='header verm'> 
  <h1>{props.nome}</h1>
    <ul className='menu'>
      <li>{props.links[2]}</li>
      <li>{props.links[1]}</li>
      <li>{props.links[0]}</li>
    </ul>
</header>
        
     );
 }

 export default Header;
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