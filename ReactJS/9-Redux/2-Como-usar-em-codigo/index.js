const redux = require('redux');
const createStore = redux.createStore;

const incrementAction = { type:'INCREMENT' };
const decrementAction = { type:'DECREMENT' };

function counterReduce( state = 0 , action ) {
    switch ( action.type ) {

        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counterReduce);
console.log(store.getState());

store.subscribe(() => { console.log(store.getState())});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);