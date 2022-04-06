import React from "react"

function DoneImg(props) {
    if ( props.done ) {
        return (<img alt="done" src="./Assets/check_circle.svg"></img>)
    } else {
        return (<img alt="undone" src="./Assets/semCheck.svg"></img>)
        
    }
}

function List(props) {
    
    return(
                <ul>
                    {props.items.map(item => <li key={ item.id } className={item.done ? "done" : ""}>
                         { item.text }
                         
                        <button onClick={ () => { props.onItemChecked(item) }}><DoneImg done={ item.done }></DoneImg> </button>
                        <button onClick={ () => { props.onItemDeleted(item) }}><img alt="delete" src="./Assets/delete.svg"></img></button>
                        </li>)}
                    
                </ul>
    )
}

export default List;