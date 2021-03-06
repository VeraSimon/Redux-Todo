import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { todosReducer } from './reducers/';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    .strike-through {
        text-decoration: line-through;
    }
`;

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(todosReducer, reduxDevToolsHook);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
