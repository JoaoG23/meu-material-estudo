import React from "react";
import './List.css';
import ListItems from './ListItems';

// Para que uam props seja exportada coloque pros no componente


function List(props) {
    return(<ul>{ props.items.map(item => <ListItems  key={ item.id } item={ item }  onItemChecked={ props.onItemChecked } onItemDeleted={ props.onItemDeleted } ></ListItems>) }</ul>)
}

export default List;