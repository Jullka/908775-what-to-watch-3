import {extend} from '../../utils.js';
import {AppState} from '../../components/const.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const initialState = {
  appState: AppState.PENDING,
  selectedGenre: ALL_GENRES,
  shownMoviesNumber: SHOWN_MOVIES_NUMBER
};

const ActionType = {
  CHANGE_APP_STATE: `CHANGE_APP_STATE`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  RESET_SHOW_MORE_MOVIES: `RESET_SHOW_MORE_MOVIES`,
  ROLLBACK: `ROLLBACK`
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
  rollback: () => ({
    type: ActionType.ROLLBACK
  })
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
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

// export default Object.assign({}, ActionCreator);
export {reducer, ActionType};
export default ActionCreator;
