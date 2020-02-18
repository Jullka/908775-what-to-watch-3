import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Movies, movieDetails} from './mocks/movies.js';

const filmDetails = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      title={filmDetails.title}
      genre={filmDetails.genre}
      releaseDate={filmDetails.releaseDate}
      movies={Movies}
      movieDetails={movieDetails}
    />,
    document.querySelector(`#root`)
);
