import {extend} from '../../utils.js';
import adapter from './adapter.js';
import {commentsAdapter} from "./adapter.js";

const MOVIES_COUNT = 8;
const ALL_GENRES = `All genres`;

const initialState = {
  movie: {},
  movies: [],
  selectedGenre: ALL_GENRES,
  moviesByGenre: [],
  showedMovies: [],
  moviesCount: MOVIES_COUNT
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  CHANGE_MOVIES_COUNT: `CHANGE_MOVIES_COUNT`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_DETAILS: `LOAD_MOVIE_DETAILS`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),

  getMoviesByGenre: (genre) => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: genre,
  }),

  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: MOVIES_COUNT,
  }),

  changeMoviesCount: (movieCount) => {
    return {
      type: ActionType.CHANGE_MOVIES_COUNT,
      payload: movieCount,
    };
  },

  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },

  loadMovieDetails: (movie) => {
    return {
      type: ActionType.LOAD_MOVIE_DETAILS,
      payload: movie,
    };
  },
};

const loadComments = (item) => (dispatch, getState, api) => {
  return api.get(`/comments/${item.id}`)
    .then((response) => {
      item.reviews = response.data.map((review) => commentsAdapter(review));
    });
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedData = response.data.map((item) => {
          const adaptedItem = adapter(item);
          dispatch(loadComments(adaptedItem));
          return adaptedItem;
        });
        dispatch(ActionCreator.loadMovies(adaptedData));
      });
  },
  loadMovieDetails: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        return adapter(response.data);
      })
      .then((movie) => {
        dispatch(loadComments(movie));
        return movie;
      })
      .then((movie) => {
        dispatch(ActionCreator.loadMovieDetails(movie));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });

    case ActionType.GET_MOVIES_BY_GENRE:
      const {movies} = state;
      const genre = action.payload;

      if (genre === `All genres`) {
        return extend(state, {
          moviesByGenre: movies
        });
      }

      return extend(state, {
        moviesByGenre: movies.filter((movie) => movie.genre === genre),
      });

    case ActionType.SHOW_MORE_MOVIES:
      const moviesCount = state.moviesCount + action.payload;
      return extend(state, {
        moviesCount,
        showedMovies: state.moviesByGenre.slice(0, moviesCount),
      });

    case ActionType.CHANGE_MOVIES_COUNT:
      return extend(state, {
        moviesCount: action.payload,
      });

    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
        moviesByGenre: action.payload,
        showedMovies: action.payload.slice(0, state.moviesCount),
      });

    case ActionType.LOAD_MOVIE_DETAILS:
      return extend(state, {
        movie: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
