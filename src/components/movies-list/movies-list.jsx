import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

const MoviesList = (props) => {
  const {movies, onMovieHover} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCard
          key={movie.id}
          title={movie.title}
          img={movie.img}
          onMovieHover={onMovieHover}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,

  onMovieHover: PropTypes.func.isRequired,
};

export default MoviesList;
