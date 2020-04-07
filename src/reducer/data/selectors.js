import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getMoviesByGenre = (state) => {
  return state[NAME_SPACE].moviesByGenre;
};

export const getMovieDetails = (state) => {
  return state[NAME_SPACE].movie;
};

export const getSelectedGenre = (state) => {
  return state[NAME_SPACE].selectedGenre;
};

export const getShowedMovies = (state) => {
  return state[NAME_SPACE].showedMovies;
};

export const getMoviesCount = (state) => {
  return state[NAME_SPACE].moviesCount;
};

export const getMyMoviesList = (state) => {
  return state[NAME_SPACE].myListMovies;
};


