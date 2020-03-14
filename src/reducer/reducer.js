import {extend} from "../utils.js";
import {Movies} from '../mocks/movies.js';

// export default (movies, selectedGenre) => selectedGenre === Genre.ALL ?
//   movies :
//   movies.filter(({genre}) => genre === selectedGenre);
const ALL_GENRES = `All genres`;

const initialState = {
  selectedGenre: `All genres`,
  movies: Movies,
  filteredMovies: [...Movies],
  selectedMovie: null
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SELECT_MOVIE: `SELECT_MOVIE`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getMoviesByGenre: () => ({
    type: ActionType.GET_MOVIES_BY_GENRE
  }),
  selectMovie: (movie) => ({
    type: ActionType.SELECT_MOVIE,
    payload: movie
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

    case ActionType.GET_MOVIES_BY_GENRE:
      let getMoviesByGenre = [];
      // filteredMovies = (movies, selectedGenre) => selectedGenre === Genre ?
      //   Movies :
      //   Movies.filter(({genre}) => genre === selectedGenre);
      if (state.genre === ALL_GENRES) {
        getMoviesByGenre = Movies;
      } else {
        getMoviesByGenre = Movies.filter((movie) => movie.genre === state.selectedGenre);
      }
      return extend(state, {
        filteredMovies: getMoviesByGenre(state.movies, state.selectedGenre),
      });

    case ActionType.SELECT_MOVIE:
      return extend(state, {selectedMovie: action.payload});
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
