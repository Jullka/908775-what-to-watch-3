import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const onSmallMovieCardTitleClick = () => {};

const App = (props) => {
  const {promoFilm, movies} = props;
  return (
    <Main
      promoFilm={promoFilm}
      movies={movies}
      onSmallMovieCardTitleClick={onSmallMovieCardTitleClick}
    />
  );
};

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
  movies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
