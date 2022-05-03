const redux = require('redux');
const createStore = redux.createStore;
const combineReduce = redux.combineReducers;

const { incrementAction, decrementAction } = require('./Actions/CounterAction');
const addListAction  = require('./Actions/ListAction');

const counterReduce = require('./Reduces/CounterReduce');
const listaReduce = require('./Reduces/ListaReduce');

const allReduce = combineReduce({
    count: counterReduce,
    list:listaReduce
});

const store = createStore(allReduce);
console.log(store.getState());

store.subscribe(() => { console.log(store.getState())});


// store.dispatch(list('Batedeira'));
store.dispatch(incrementAction(2));
// store.dispatch(list('Martelete'));
store.dispatch(decrementAction(2));




