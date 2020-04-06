import {reducer, ActionType} from './data.js';
import {filmDetails, films} from '../../mocks/test-mocks.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;
const SHOW_MORE_MOVIES_COUNT = 16;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    selectedGenre: ALL_GENRES,
    moviesByGenre: [],
    movie: {},
    movies: [],
    showedMovies: [],
    moviesCount: SHOWN_MOVIES_NUMBER,
  });
});

it(`Reducer should set current genre by a given value`, () => {
  expect(reducer({
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
  }, {
    type: ActionType.SET_GENRE,
    payload: `Drama`,
  })).toEqual({
    selectedGenre: `Drama`,
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails
  });

  expect(reducer({
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
  }, {
    type: ActionType.SET_GENRE,
    payload: null,
  })).toEqual({
    selectedGenre: null,
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
  });
});

it(`Reducer should get movies by a given genre`, () => {
  expect(reducer({
    genre: `Drama`,
    movies: films,
    movie: filmDetails,
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: `Drama`,
  })).toEqual({
    genre: `Drama`,
    movies: films,
    movie: filmDetails,
    moviesByGenre: films.filter((movie) => movie.genre === `Drama`),
  });

  expect(reducer({
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: [],
  })).toEqual({
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
    moviesByGenre: [],
  });
});

it(`Reducer should show more films`, () => {
  expect(reducer({
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
    moviesByGenre: films,
    showedMovies: films.slice(0, SHOWN_MOVIES_NUMBER),
    moviesCount: SHOWN_MOVIES_NUMBER,
  }, {
    type: ActionType.SHOW_MORE_MOVIES,
    payload: SHOWN_MOVIES_NUMBER,
  })).toEqual({
    genre: ALL_GENRES,
    movies: films,
    movie: filmDetails,
    moviesByGenre: films,
    showedMovies: films.slice(0, SHOW_MORE_MOVIES_COUNT),
    moviesCount: SHOW_MORE_MOVIES_COUNT,
  });
});

it(`Reducer should change films count`, () => {
  expect(reducer({
    genre: `NewGenre`,
    movies: films,
    movie: filmDetails,
    moviesByGenre: films,
    showedMovies: films.slice(0, SHOWN_MOVIES_NUMBER),
    moviesCount: SHOW_MORE_MOVIES_COUNT,
  }, {
    type: ActionType.CHANGE_MOVIES_COUNT,
    payload: 0,
  })).toEqual({
    genre: `NewGenre`,
    movies: films,
    movie: filmDetails,
    moviesByGenre: films,
    showedMovies: films.slice(0, SHOWN_MOVIES_NUMBER),
    moviesCount: 0,
  });
});
