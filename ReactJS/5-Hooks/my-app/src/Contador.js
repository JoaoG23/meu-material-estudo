/**
 *  Hooks
 *  Quando a funcao nao tem estados e nem
 * ciclo de vida. São utilizados os hookes
 * 
 * 1- Use effect = Ira ser chamado em 2 ocasioes 
 * 1º Quando o componente for criado. = didMount
 * 2º Toda vez que ele for atualizado = didMountUpdate
*/
import React , { useEffect, useState } from "react";

function Contador(props) {
    // Criar 2 constantes
    const [contador , setContador] = useState(props.contador);
    const [meuEstado , setMeuEstado] = useState('qualquer coisa');

    useEffect(() => { 
        document.title = contador // Titulo
        localStorage.setItem('contador', contador); // LocalStorega
    })

    function add() {
        setContador(contador + 1);
        console.info(meuEstado);
    }
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}



export default Contador;