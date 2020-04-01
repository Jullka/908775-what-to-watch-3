import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Main} from './main.jsx';
import NameSpace from '../..//reducer/name-space.js';
import {AppState, AuthorizationStatus} from '../const.js';
import {history} from '../../routes/history.js';

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
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: `John Travolta, Robert Duvall, Stephen Fry and other`
};

const mockStore = configureStore([]);
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

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              onPlayMovie={() => {}}
              onMovieCardClick={() => {}}/>
          </Router>
        </Provider>,
        {
          createNodeMock: () => ({})
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
