import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {getSelectedMovie, getShownMoviesNumber} from '../../reducer/app/selectors.js';
import {getMoviesByGenre} from '../../reducer/data/selectors.js';
import {getMoviesLikeThis} from '../../reducer/data/selectors.js';
import {withActiveState} from '../hocs/with-active-state/with-active-state.js';
import {withTimer} from '../hocs/with-timer/with-timer.js';

const SmallMovieCardWrapped = withTimer(withActiveState(SmallMovieCard));

export const MoviesList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) =>
        <SmallMovieCardWrapped
          key={movie.id}
          movie={movie}/>
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
  ).isRequired
};

const mapStateToProps = (state) => ({
  movies: getSelectedMovie(state) ?
    getMoviesLikeThis(state) :
    getMoviesByGenre(state).slice(0, getShownMoviesNumber(state))
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
