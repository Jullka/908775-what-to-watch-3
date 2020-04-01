import {extend} from '../../utils.js';
import Movie from './adapter/movie.js';
import {AppState} from '../../components/const.js';
import {handleError} from '../utils.js';

const initialState = {
  movies: [],
  movieDetails: null
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_DETAILS: `LOAD_MOVIE_DETAILS`
};

const ActionCreator = {
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
    default:
      return state;
  }
};

export {reducer, ActionType, Operation, ActionCreator};
export default ActionCreator;
// export default Object.assign({}, ActionCreator);
