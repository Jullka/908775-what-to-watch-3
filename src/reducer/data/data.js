import {extend} from '../../utils.js';
import Movie from './adapter/movie.js';
import {AppState} from '../../components/const.js';
import {handleError} from '../utils.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const initialState = {
  movies: [],
  movieDetails: null,
  appState: AppState.PENDING,
  selectedGenre: ALL_GENRES,
  shownMoviesNumber: SHOWN_MOVIES_NUMBER
};

const ActionType = {
  CHANGE_APP_STATE: `CHANGE_APP_STATE`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  RESET_SHOW_MORE_MOVIES: `RESET_SHOW_MORE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_DETAILS: `LOAD_MOVIE_DETAILS`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: SHOWN_MOVIES_NUMBER
  }),
  resetShowMoreMovies: () => ({
    type: ActionType.RESET_SHOW_MORE_MOVIES
  }),
  changeAppState: (appState) => ({
    type: ActionType.CHANGE_APP_STATE,
    payload: appState
  }),
  loadMovies(movies) {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadMovieDetails(movie) {
    return {
      type: ActionType.LOAD_MOVIE_DETAILS,
      payload: movie,
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.loadMovies()
    .then(Movie.parseMovies)
    .then((movies) => Promise.all(
        movies.map((movie) => api
          .loadComments(movie.id)
          .then(Comment.parseComments)
          .then((comments) => movie.setComments(comments))
        )
    ))
    .then((movies) => dispatch(ActionCreator.loadMovies(movies)))
    .then(() => api.loadMovieDetails())
    .then((data) => dispatch(ActionCreator.loadMovieDetails(Movie.parseMovie(data))))
    .then(() => dispatch(ActionCreator.changeAppState(AppState.READY)))
    .catch((err) => dispatch(handleError(err)));
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_MOVIE_DETAILS:
      return extend(state, {
        movieDetails: action.payload,
      });
    case ActionType.CHANGE_APP_STATE:
      return extend(state, {
        appState: action.payload
      });

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesNumber: state.shownMoviesNumber + action.payload
      });

    case ActionType.RESET_SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesNumber: SHOWN_MOVIES_NUMBER
      });

    default:
      return state;
  }
};

export {reducer, ActionType, Operation};
export default ActionCreator;
