import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {default as App} from './app.connect.jsx';
import {NameSpace} from '../../reducer/name-space.js';
import configureStore from 'redux-mock-store';
import {AppState, AuthorizationStatus} from '../const.js';
import thunk from 'redux-thunk';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

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
  runTime: 154,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`],
  comments: [
    {
      id: `1`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: new Date(),
      rating: 9.0
    },
    {
      id: `2`,
      text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
      author: `Bill Goodykoontz`,
      date: new Date(),
      rating: 8.0
    },
    {
      id: `3`,
      text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
      author: `Amanda Greever`,
      date: new Date(),
      rating: 6.7
    },
  ]
};

const mockApi = {
  loadMovies() {
    return Promise.resolve([movieDetails]);
  },
  checkAuthorizationStatus() {
    return Promise.resolve({
      "id": 1,
      "email": `dj-1@ukr.net`,
      "name": `dj-1`,
      "avatar_url": `img/1.png`
    });
  }
};
const mockStore = configureStore([thunk.withExtraArgument(mockApi)]);
const store = mockStore({
  [NameSpace.DATA]: {
    movieDetails,
    movies: []
  },
  [NameSpace.APP]: {
    appState: AppState.READY,
    selectedGenre: ALL_GENRES,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null
  }
});

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>,
        {
          createNodeMock: () => ({})
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

