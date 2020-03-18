import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import {getGenresList} from '../utils/get-genres-list.js';

const ALL_GENRES = `All genres`;
const ACTIVE_CLASS = `catalog__genres-item--active`;

const GenresList = (props) => {
  const {movies, selectedGenre, onGenreSelect} = props;

  const handleGenreClick = (evt, genre) => {
    evt.preventDefault();
    if (genre !== selectedGenre) {
      onGenreSelect(genre);
    }
  };

  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${selectedGenre === ALL_GENRES ? ACTIVE_CLASS : ``}`}
        onClick={(evt) => handleGenreClick(evt, ALL_GENRES)}
      >
        <a href="#" className="catalog__genres-link">{ALL_GENRES}</a>
      </li>
      {getGenresList(movies).map((genre, i) => (
        <li
          key={genre + i}
          className={`catalog__genres-item ${selectedGenre === genre ? ACTIVE_CLASS : ``}`}
          onClick={(evt) => handleGenreClick(evt, genre)}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })
  ).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onGenreSelect: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  selectedGenre: state.selectedGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getMoviesByGenre());
    dispatch(ActionCreator.resetShowMoreMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
