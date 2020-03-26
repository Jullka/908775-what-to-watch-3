import {extend} from '../utils.js';
import {Movies, movieDetails} from '../mocks/movies.js';
import {getMoviesByGenre} from '../components/utils/get-movies-by-genre.js';
import {GameScreen} from '../components/const.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const initialState = {
  gameScreen: GameScreen.MAIN,
  history: [],
  movieDetails,
  selectedGenre: ALL_GENRES,
  movies: Movies,
  selectedMovie: null,
  filteredMovies: [...Movies],
  shownMoviesNumber: Movies.length > SHOWN_MOVIES_NUMBER ? SHOWN_MOVIES_NUMBER : Movies.length
};

const ActionType = {
  CHANGE_GAME_SCREEN: `CHANGE_GAME_SCREEN`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  SELECT_MOVIE: `SELECT_MOVIE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  RESET_SHOW_MORE_MOVIES: `RESET_SHOW_MORE_MOVIES`,
  ROLLBACK: `ROLLBACK`
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
  }),
  showMoreMovies: () => ({
    type: ActionType.SHOW_MORE_MOVIES,
    payload: SHOWN_MOVIES_NUMBER
  }),
  resetShowMoreMovies: () => ({
    type: ActionType.RESET_SHOW_MORE_MOVIES
  }),
  changeGameScreen: (gameScreen) => ({
    type: ActionType.CHANGE_GAME_SCREEN,
    payload: gameScreen
  }),
  rollback: () => ({
    type: ActionType.ROLLBACK
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GAME_SCREEN:
      return extend(state, {
        gameScreen: action.payload
      });
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        filteredMovies: getMoviesByGenre(state.movies, state.selectedGenre),
      });

    case ActionType.SELECT_MOVIE:
      return extend(state, {
        selectedMovie: action.payload
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesNumber: state.shownMoviesNumber + action.payload
      });
    case ActionType.RESET_SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesNumber: SHOWN_MOVIES_NUMBER
      });
    case ActionType.ROLLBACK:
      state.history.pop();
      state.history.pop();
      return reducer(state, state.history.pop());

    default:
      return reducer(state, {
        type: ActionType.CHANGE_GAME_SCREEN,
        payload: GameScreen.MAIN
      });
  }
};

export {reducer, ActionType, ActionCreator};
