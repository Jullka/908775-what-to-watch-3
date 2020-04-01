import React from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';
import {withActiveState} from '../hocs/with-active-state/with-active-state.js';
import {withTimer} from '../hocs/with-timer/with-timer.js';

const SmallMovieCardWrapped = withTimer(withActiveState(SmallMovieCard));

const MoviesList = (props) => {
  const {movies, onMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) =>
        <SmallMovieCardWrapped
          key={movie.id}
          movie={movie}
          onClick={onMovieCardClick}/>
      )}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export {MoviesList};
