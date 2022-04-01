import React from 'react';
import './todo.css';

function Todo() {
    return(
        <div className='container'>
            <h1>Todo</h1>
            <section>
                <input type="text"></input>
                <button>Adicionar</button>
            </section>

            <section>
                <ul>
                    <li>Itens</li>
                </ul>
            </section>
        </div>
    )
}

export default Todo;