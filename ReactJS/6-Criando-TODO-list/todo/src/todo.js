import React , { useEffect, useState } from 'react';
import Lista from './List';
import Item from './Item';
import TodoForm from './TodoForm';
import './todo.css';

// Lembre-se so podemos modificar um elemento atraves dos estados.
function Todo() {
    /**
     * COMO PASSAR DO FILHO PARA O PAI
     * 1º Criar um component TodoForm 
     * 2º Coloca todos estados dentro dele (TodoForm)
     * 3º O seu estado inicial tambem = useState
     * 4º Criar uma funcao como callback = onAddItem
     * 5º Adicionar ela no TodoForm
     * 6º E onAddItem = tera o setItems 
     */

    const [ items , setItems ] = useState([]);

    function onAddItem( text ) {
        
        let itemAdd = new Item(text); 
        setItems([...items , itemAdd]);
    }


    function onItemDeleted( item ) { // Funcao de remocao de itens

        let filteredItems = items.filter( it => it.id !== item.id );
        setItems(filteredItems);
    }


    function onItemChecked( item ) { // Funcao de remocao de itens

        console.log('Clicado')
        let updateItems = items.map(it => {
            if ( it.id === item.id ) {
                it.done = it.done;
            }
            return it;
        })
        setItems(updateItems); // Atualiza o estado
    }


    return(
        <div className='container'>
            <h1>Todo</h1>

            <TodoForm onAddItem={onAddItem}></TodoForm>
            <Lista onItemChecked={onItemChecked} onItemDeleted={onItemDeleted} items={items}></Lista>
        </div>
    )
}


export default Todo;