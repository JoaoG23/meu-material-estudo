import React from "react";
import Card from './Card';
import './List.css';

function DoneImg(props) {
    if ( props.done ) {
        return (<img alt="done" src="./Assets/feito.svg"></img>)
    } else {
        return (<img alt="undone" src="./Assets/naofeito.svg"></img>)
        
    }
}

function List(props) {
    return(
                <ul >
                    {props.items.map(item => <li key={ item.id } >
                         <Card className={item.done ? "done item" : "item"}>
                         { item.text }
                            <div>
                                <button onClick={ () => { props.onItemChecked(item) }}><DoneImg done={ item.done }></DoneImg> </button>
                                <button onClick={ () => { props.onItemDeleted(item) }}><img alt="delete" src="./Assets/remove.svg"></img></button>
                            </div>
                         </Card>
                        </li>
                        )}
                    
                </ul>
    )
}

export default List;