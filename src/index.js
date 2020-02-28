import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Movies, movieDetails} from './mocks/movies.js';

ReactDOM.render(
    <App
      movies={Movies}
      movieDetails={movieDetails}
    />,
    document.querySelector(`#root`)
);
