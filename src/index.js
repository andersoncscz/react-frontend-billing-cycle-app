import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import reduxMulti from 'redux-multi';

import rootReducer from './redux/reducers';
import AuthOrApp from './main/authOrApp';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk, reduxMulti)
));

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>, 
    document.getElementById('app')
)

serviceWorker.unregister();