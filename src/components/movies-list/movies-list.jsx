import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {getMoviesLikeThis} from '../utils/get-movies-like-this.js';
import withActiveState from '../hocs/with-active-state/with-active-state.js';

const SmallMovieCardWrapped = withActiveState(SmallMovieCard);

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
  movies: state.selectedMovie ?
    getMoviesLikeThis(state.selectedMovie, state.movies) : state.filteredMovies.slice(0, state.shownMoviesNumber)
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
