import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore((state,action) => Object.assign({}, state, {battletable: action.battletable}), {battletable: [["","",""],["","",""],["","",""]]});

ReactDOM.render(<Provider store={store}><App target="react" /></Provider>, document.getElementById('app'));