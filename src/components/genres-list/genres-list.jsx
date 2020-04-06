import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data.js';
import {getSelectedGenre, getMovies} from '../../reducer/data/selectors.js';

const ALL_GENRES = `All genres`;
const ACTIVE_GENRE_ELEMENT = `catalog__genres-item--active`;
const GENRE_LIST_MAX_LENGTH = 9;
const DEFAULT_MOVIE_COUNT = 8;

class GenresList extends PureComponent {

  render() {
    const {movies, onGenreElementClick, onItemEnter, selectedGenre} = this.props;

    const returnSelectedGenres = () => {
      let selectedGenres = [ALL_GENRES];
      movies.map((movie) => {
        if (!selectedGenres.includes(movie.genre)) {
          selectedGenres.push(movie.genre);
        }
      });

      return selectedGenres;
    };

    const genresList = returnSelectedGenres().slice(0, GENRE_LIST_MAX_LENGTH);

    const returnSelectedGenreElement = (genre) => {
      return selectedGenre === genre ? ACTIVE_GENRE_ELEMENT : ``;
    };

    const returnGenresList = () => {
      const genresElements = [];
      for (const genre of genresList) {
        const genreFragment =
          <Fragment key={genre + genresList.indexOf(genre)}>
            <li className={`catalog__genres-item ${returnSelectedGenreElement(genre)}`}>
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onGenreElementClick(genre);
                  onItemEnter(genre);
                }}
              >{genre}</a>
            </li>
          </Fragment>;
        genresElements.push(genreFragment);
      }
      return genresElements;
    };

    return (
      <Fragment>
        <ul className="catalog__genres-list">
          {returnGenresList()}
        </ul>
      </Fragment>
    );
  }
}

GenresList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        releaseDate: PropTypes.number,
        image: PropTypes.string,
        poster: PropTypes.string,
        background: PropTypes.string,
        video: PropTypes.string,
        runtime: PropTypes.string,
        rating: PropTypes.number,
        votes: PropTypes.number,
        director: PropTypes.string,
        description: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        reviews: PropTypes.array,
      })
  ),

  onGenreElementClick: PropTypes.func.isRequired,
  onItemEnter: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  selectedGenre: getSelectedGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreElementClick: (genre) => {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.changeMoviesCount(DEFAULT_MOVIE_COUNT));
    dispatch(ActionCreator.getMoviesByGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

