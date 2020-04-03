import {createSelector} from 'reselect';
import {NameSpace} from '../name-space.js';

const MAX_GENRES_COUNT = 9;
const MOVIES_LIKE_THIS_MAX_LENGTH = 4;
const ALL_GENRES = `All genres`;
const NAME_SPACE = NameSpace.DATA;

const getMovies = (state) => state[NAME_SPACE].movies;

const getMovieDetails = (state) => state[NAME_SPACE].movieDetails;

const getShownMoviesNumber = (state) => state[NAME_SPACE].shownMoviesNumber;

const getAppState = (state) => state[NAME_SPACE].appState;

const getSelectedGenre = (state) => state[NAME_SPACE].selectedGenre;

const getMovie = (state, movieId) => getMovies(state).filter(({id}) => id === movieId)[0];

const getGenresList = createSelector(
    [getMovies],
    (movies) => [...new Set(movies.map(({genre}) => genre))].slice(0, MAX_GENRES_COUNT)
);

const getMoviesLikeThis = (state, selectedMovie) => getMovies(state)
    .filter(({id, genre}) => genre === selectedMovie.genre && id !== selectedMovie.id)
    .slice(0, MOVIES_LIKE_THIS_MAX_LENGTH);

const getMoviesByGenre = createSelector(
    [getMovies, getSelectedGenre],
    (movies, selectedGenre) => selectedGenre === ALL_GENRES ?
      movies :
      movies.filter(({genre}) => genre === selectedGenre)
);


export {getGenresList, getMoviesLikeThis, getMovies, getMovie, getMovieDetails, getMoviesByGenre, getSelectedGenre, getShownMoviesNumber, getAppState};


