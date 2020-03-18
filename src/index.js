import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {Movies, movieDetails} from './mocks/movies.js';
import {reducer} from './reducer/reducer.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        movies={Movies}
        movieDetails={movieDetails}
      />
    </Provider>,
    document.querySelector(`#root`)
);
