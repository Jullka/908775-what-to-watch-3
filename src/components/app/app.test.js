import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import App from './app.jsx';
import NameSpace from '../../reducer/name-space.js';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../const.js';
import {filmDetails, films} from '../../mocks/test-mocks.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    selectedGenre: ALL_GENRES,
    movie: {filmDetails},
    movies: films,
    moviesByGenre: films,
    showedMovies: films,
    moviesCount: SHOWN_MOVIES_NUMBER,
  },

  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: ``
  }
});

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            film={filmDetails}/>
        </Provider>,
        {
          createNodeMock: () => ({})
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

