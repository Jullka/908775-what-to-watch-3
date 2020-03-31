import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {reducer} from './reducer/data/data.js';
import Api from './api/api.js';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const api = new Api();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
