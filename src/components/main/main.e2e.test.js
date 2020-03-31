import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import Main from './main.jsx';
import ActionCreator from '../../reducer/action-creator.js';
import {NameSpace} from '../../reducer/name-space.js';
import configureStore from "redux-mock-store";
import {AppState, AuthorizationStatus} from '../const.js';
import {Router} from 'react-router-dom';
import {history} from '../../routes/history.js';

const MOVIES_IN_STORE_COUNT = 1;
const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

Enzyme.configure({
  adapter: new Adapter(),
});

const movieDetails = {
  id: `044`,
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
  poster: `img/johnny-english.jpg`,
  bigPoster: `img/moonrise-kingdom.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 8.9,
  ratingLevel: `Very good`,
  ratingCount: 240,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: `John Travolta, Robert Duvall, Stephen Fry and other`
};

const mockEvent = {
  preventDefault() {},
};

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    movieDetails,
    movies: [movieDetails]
  },
  [NameSpace.APP]: {
    appState: AppState.READY,
    selectedGenre: ALL_GENRES,
    selectedMovie: null,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null
  }
});

it(`Should movieCard be clicked`, () => {
  ActionCreator.selectMovie = jest.fn(ActionCreator.selectMovie);

  const main = mount(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
  );

  const movieTitle = main.find(`.small-movie-card__link`);
  movieTitle.forEach((title) => title.simulate(`click`, mockEvent));
  expect(ActionCreator.selectMovie.mock.calls.length).toBe(MOVIES_IN_STORE_COUNT);
});

