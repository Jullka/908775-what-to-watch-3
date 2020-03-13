import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  getGenresList(moviesList) {
    return [`All genres`, ...new Set(moviesList.map((movie) => movie.genre))];
  }

  getMoviesByGenre(genre, movies) {
    return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
  }

  render() {
    const {moviesList, genre, changeGenre, onMovieCardTitleClick} = this.props;

    return (
      <>
        <ul className="catalog__genres-list">
          {this.getGenresList(moviesList).map((activeGenre, index) => (
            <li
              className={`catalog__genres-item ${
                genre === activeGenre ? `catalog__genres-item--active` : ``
              }`}
              key={activeGenre + index}
            >
              <a
                className="catalog__genres-link"
                onClick={() => {
                  changeGenre(activeGenre);
                }}
              >
                {activeGenre}
              </a>
            </li>
          ))}
        </ul>

        <MoviesList
          moviesList={this.getMoviesByGenre(genre, moviesList)}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
      </>
    );
  }
}
GenresList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

export {GenresList};
