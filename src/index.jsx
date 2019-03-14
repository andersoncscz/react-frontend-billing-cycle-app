import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import reduxMulti from 'redux-multi';

import rootReducer from './redux/reducers';
import Routes from './main/routes';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk, reduxMulti)
));

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, 
    document.getElementById('app')
)