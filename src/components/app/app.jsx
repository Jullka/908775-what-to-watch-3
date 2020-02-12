import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const smallMovieCardTitleHandler = () => {};

const App = (props) => {
  const {title, genre, releaseDate, moviesList} = props;
  return (
    <Main
      title={title}
      genre={genre}
      releaseDate={releaseDate}
      moviesList={moviesList}
      onSmallMovieCardTitleClick={smallMovieCardTitleHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  moviesList: PropTypes.array
};

export default App;
