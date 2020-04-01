import ActionCreator, {reducer} from './app.js';
import {AppState} from '../../components/const.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

it(`Reducer should change genre`, () => {
  const initialState = {
    appState: AppState.READY,
    selectedGenre: ALL_GENRES,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER,
  };
  const targetState = {
    appState: AppState.READY,
    selectedGenre: `Comedy`,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER
  };

  expect(reducer(initialState, ActionCreator.changeGenre(`Comedy`)))
    .toEqual(targetState);
});

it(`Reducer should change Appstate`, () => {
  const initialState = {
    appState: AppState.PENDING,
    selectedGenre: ALL_GENRES,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER
  };
  const targetState = {
    appState: AppState.READY,
    selectedGenre: ALL_GENRES,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER
  };

  expect(reducer(initialState, ActionCreator.changeAppState(AppState.READY)))
    .toEqual(targetState);
});
