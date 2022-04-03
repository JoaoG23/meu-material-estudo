import React ,{ useState } from "react";

function TodoForm(props) {

    const [text , setText] = useState("");

    function mostrarNoImput(evento) {
        let t = evento.target.value; // Tipo o This
        console.info(t); // 1º Passo - Toda a vez que estado for digitado ele modificará na tela
        setText(t); // 2º Passo - Ele irá inserir esse texto

    }
    
    function adicionarNaLista(evento) {
        evento.preventDefault();
        if (text) {
            props.onAddItem(text) // Chama essa funcao com esse parametro
            setText(""); // Limpa o input na tela
        } 
    }
     
    return(<form>
        <input onChange={mostrarNoImput} type="text" value={text}></input> 
        <button onClick={adicionarNaLista}>Adicionar</button>
    </form>
    )
}

export default TodoForm;