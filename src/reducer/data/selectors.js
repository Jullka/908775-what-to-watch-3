import {createSelector} from 'reselect';
import {getSelectedMovie} from '../app/selectors.js';
import {getSelectedGenre} from '../app/selectors.js';
import NameSpace from '../name-space.js';

const MAX_GENRES_COUNT = 9;
const MOVIES_LIKE_THIS_MAX_LENGTH = 4;
const ALL_GENRES = `All genres`;

const getMovies = (state) => state[NameSpace.DATA].movies;

const getMovieDetails = (state) => state[NameSpace.DATA].movieDetails;

const getMovie = (state, movieId) => getMovies(state).filter(({id}) => id === movieId)[0];

const getGenresList = createSelector(
    [getMovies],
    (movies) => [...new Set(movies.map(({genre}) => genre))].slice(0, MAX_GENRES_COUNT)
);

const getMoviesLikeThis = createSelector(
    [getMovies, getSelectedMovie],
    (movies, selectedMovie) =>
      movies
        .filter(({id, genre}) => genre === selectedMovie.genre && id !== selectedMovie.id)
        .slice(0, MOVIES_LIKE_THIS_MAX_LENGTH)
);

const getMoviesByGenre = createSelector(
    [getMovies, getSelectedGenre],
    (movies, selectedGenre) => selectedGenre === ALL_GENRES ?
      movies :
      movies.filter(({genre}) => genre === selectedGenre)
);


export {getGenresList, getMoviesLikeThis, getMovies, getMovie, getMovieDetails, getMoviesByGenre};


