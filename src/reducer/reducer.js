import {extend} from "../utils.js";
import {Movies} from '../mocks/movies.js';

const ALL_GENRES = `All genres`;

const initialState = {
  selectedGenre: ALL_GENRES,
  movies: Movies,
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

      // case ActionType.GET_MOVIES_BY_GENRE:
      //   let getMoviesByGenre = [];

      //   if (state.genre === ALL_GENRES) {
      //     getMoviesByGenre = Movies;
      //   } else {
      //     getMoviesByGenre = Movies.filter((movie) => movie.genre === state.selectedGenre);
      //   }
      //   return extend(state, {
      //     selectedMovie: getMoviesByGenre(state.movies, state.selectedGenre),
      //   });

    case ActionType.SELECT_MOVIE:
      return extend(state, {
        selectedMovie: action.payload
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
