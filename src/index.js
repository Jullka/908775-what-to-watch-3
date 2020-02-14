import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from './mocks/movies';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const handleTitleClick = () => {};

ReactDOM.render(
    <App
      promoFilm={promoFilm}
      movies={movies}
      onTitleClick={handleTitleClick}
    />,
    document.querySelector(`#root`)
);

