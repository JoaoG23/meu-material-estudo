import React from "react";
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
                    {props.items.map(item => <li key={ item.id } className={item.done ? "done aoCanto" : " aoCanto"}>
                         { item.text }
                         
                         <div>
                            <button onClick={ () => { props.onItemChecked(item) }}><DoneImg done={ item.done }></DoneImg> </button>
                            <button onClick={ () => { props.onItemDeleted(item) }}><img alt="delete" src="./Assets/remove.svg"></img></button>
                         </div>
                        </li>)}
                    
                </ul>
    )
}

export default List;