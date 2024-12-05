
import {applyMiddleware, compose, createStore} from 'redux'
import reducer from './reducers';
import { thunk } from 'redux-thunk';
import { persistStore } from 'redux-persist';


const store = createStore(reducer,
    compose(
        applyMiddleware(thunk),
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
            ? (a) => a
            : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const persister = persistStore(store);


export { store, persister }