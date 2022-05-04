const fetch = require('cross-fetch');
const thunk = require('redux-thunk').default;

const { createStore , applyMiddleware } = require('redux');
// const createStore = redux.createStore;

const initialState = [ { id: 0, title: "Tarefa", completed: false } ];

const loadItemAndAdd = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json()).then(json => {
            dispatch(addListAction(json))
        });
    }
}




const addListAction = ( item ) => {return {type: 'ADD_ITEM', payload: item}}




function listReduce( state = initialState , action  ) {
  switch ( action.type ) {
      case 'ADD_ITEM':
          return [ ...state, action.payload ] ;
      default:
          return state;
  }
}

const store = createStore( listReduce , applyMiddleware(thunk) );

store.dispatch(addListAction( { id:1 , title:'NOvo Item ', completed: true } )) // Enves de disparar essa funcao 
store.dispatch(addListAction(loadItemAndAdd()));  

console.log(store.getState());

store.subscribe(() => { console.log(store.getState()) });