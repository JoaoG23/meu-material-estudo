import React , { useEffect, useState } from 'react';
import Lista from './Componentes/List';
import Item from './Componentes/Item';
import TodoForm from './Componentes/TodoForm';
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

    const ITEM_SALVADOS = 'itemSalvado';
    const [ items , setItems ] = useState([]);

    useEffect(() => {
        let itensSalvados = JSON.parse(localStorage.getItem(ITEM_SALVADOS));
        if (itensSalvados) {
            setItems(itensSalvados); 
        }
    },[])

    useEffect(() => {
        localStorage.setItem(ITEM_SALVADOS , JSON.stringify(items)) // sempre ele ira salva o item 
    }, [items]) // Ficar de olho se houver alguma alteração nos itens 

    function onAddItem( text ) {
        
        let itemAdd = new Item(text); 
        setItems([...items , itemAdd]);
    }


    function onItemDeleted( item ) { // Funcao de remocao de itens

        let filteredItems = items.filter( it => it.id !== item.id );
        setItems(filteredItems);
    }


    function onItemChecked( item ) { // Funcao de remocao de itens
        console.log('Clicado');
        let updateItems = items.map(it => {
            if ( it.id === item.id ) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updateItems); // Atualiza o estado
    }


    return(
        <div className='container container-Style'>
            <h1>Lista de Tarefas</h1>
       
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <Lista onItemChecked={onItemChecked} onItemDeleted={onItemDeleted} items={items}></Lista>

        </div>
    )
}


export default Todo;