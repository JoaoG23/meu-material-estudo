const redux = require('redux');
const createStore = redux.createStore;
const combineReduce = redux.combineReducers;


function actionIncr( carga ) {// Somente a carga selecionada de Incremento
    return {
        type: 'INCREMENT',
        payload: carga || 1,
    }
}

function actionGeneric( tipo,carga = 1) { // Com a carga e o o tipo selecionado 
    return {
        type: tipo,
        payload: carga,
    }
}

function listaItens( item) {
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
}

function actionDecr( carga ) { // Somente a carga selecionada de decremento
    return {
        type: 'DECREMENT',
        payload: carga || 1,
    }
}


const incrementAction = actionIncr;
const decrementAction = actionDecr; 

const lista = listaItens;

function counterReduce( state = 0 , action  ) {
    switch ( action.type ) {

        case 'INCREMENT':
            return state + action.payload ;
        case 'DECREMENT':
            return state - action.payload ;
        default:
            return state;
    }
}

function reduceLista( state = [] , action  ) {
    switch ( action.type ) {
        case 'ADD_ITEM':
            return [ ...state, action.payload ] ;
        default:
            return state;
    }
}


const allReduce = combineReduce({
    count: counterReduce,
    list:reduceLista
});

const store = createStore(allReduce);
console.log(store.getState());

store.subscribe(() => { console.log(store.getState())});


store.dispatch(lista('Batedeira'));
store.dispatch(incrementAction());
store.dispatch(lista('Martelete'));
store.dispatch(incrementAction());




