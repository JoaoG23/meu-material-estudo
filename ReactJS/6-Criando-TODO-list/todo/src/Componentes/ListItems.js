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


function ListItems(props) {
    
    return(<li>
        <Card className={props.item.done ? "done item" : "item"}>
                            { props.item.text }
                                <div>
                                    <button onClick={ () => { props.onItemChecked(props.item) }}><DoneImg done={ props.item.done }></DoneImg> </button>
                                    <button onClick={ () => { props.onItemDeleted(props.item) }}><img alt="delete" src="./Assets/remove.svg"></img></button>
                                </div>
                            </Card>
                        </li>)
}

export default ListItems;