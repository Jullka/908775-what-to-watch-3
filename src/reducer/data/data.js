import {extend} from '../../utils.js';
import adapter from './adapter.js';
import {commentsAdapter} from "./adapter.js";
import {ResponseCode} from '../../components/const.js';

const MOVIES_COUNT = 8;
const ALL_GENRES = `All genres`;

const initialState = {
  movie: {},
  movies: [],
  selectedGenre: ALL_GENRES,
  moviesByGenre: [],
  showedMovies: [],
  moviesCount: MOVIES_COUNT,
  myMoviesList: null
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  CHANGE_MOVIES_COUNT: `CHANGE_MOVIES_COUNT`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE_DETAILS: `LOAD_MOVIE_DETAILS`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  LOAD_MY_MOVIES_LIST: `LOAD_MY_MOVIES_LIST`,
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

  changeFavoriteStatus: (movieId) => {
    return {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: movieId,
    };
  },

  loadMyMoviesList: (movies) => {
    return {
      type: ActionType.LOAD_MY_MOVIES_LIST,
      payload: movies,
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
  changeFavoriteStatus: (movieId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movieId}/${status}`)
      .then((response) => {
        if (response.status === ResponseCode.OK) {
          dispatch(ActionCreator.changeFavoriteStatus(movieId));
        }
      });
  },
  loadMyMoviesList: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const adaptedData = response.data.map((item) => {
          const adaptedItem = adapter(item);
          dispatch(loadComments(adaptedItem));
          return adaptedItem;
        });
        dispatch(ActionCreator.loadMyMoviesList(adaptedData));
      })
      .catch(() => {
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

    case ActionType.CHANGE_FAVORITE_STATUS:
      const changedMoviesList = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          movie.favorite = !movie.favorite;
        } return movie;
      });
      let selectedMovie;
      if (state.genre === ALL_GENRES) {
        selectedMovie = state.movies;
      } else {
        selectedMovie = state.movies.filter((movie) => movie.genre === state.genre);
      }
      const showedMovies = selectedMovie.slice(0, state.moviesCount);
      const movieDetails = state.movie.id === action.payload ? extend(state, extend(state.movie, {favorite: !state.movie.favorite})) : state.movie;
      return extend(state, {
        movies: changedMoviesList,
        selectedMovie,
        showedMovies,
        movie: movieDetails,
      });
    case ActionType.LOAD_MY_MOVIES_LIST:
      return extend(state, {
        myMoviesList: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
