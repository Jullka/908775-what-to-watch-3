import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MoviePage from './movie-page.jsx';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../const.js';
// import {Router} from 'react-router-dom';
// import {history} from '../../routes/history.js';
import {filmDetails, films} from '../../mocks/test-mocks.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const mockStore = configureStore([]);

it(`MoviePage renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      selectedGenre: ALL_GENRES,
      moviesByGenre: films.slice(0, SHOWN_MOVIES_NUMBER),
      showedMovies: films,
      moviesCount: SHOWN_MOVIES_NUMBER,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: ``
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            user=""
            film={filmDetails}
            movies={films}
            onMovieHover={() => { }}
            onItemEnter={() => { }}
            onItemLeave={() => { }}
          />
        </Provider>,
        {
          createNodeMock: () => ({})
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
