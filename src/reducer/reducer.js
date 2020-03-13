import {extend} from "../utils.js";
import {Movies} from '../mocks/movies.js';

const initialState = {
  selectedGenre: `All genres`,
  movies: Movies
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getMoviesByGenre: () => ({
    type: ActionType.GET_MOVIES_BY_GENRE
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });

    case ActionType.GET_MOVIES_BY_GENRE:
      let filteredMovies = [];

      if (state.genre === `All genres`) {
        filteredMovies = Movies;
      } else {
        filteredMovies = Movies.filter((movie) => movie.genre === state.selectedGenre);
      }

      return extend(state, {
        movies: filteredMovies
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
