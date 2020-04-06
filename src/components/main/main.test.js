import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Main from './main.jsx';
import NameSpace from '../..//reducer/name-space.js';
import {AuthorizationStatus} from '../const.js';
import {filmDetails, films} from '../../mocks/test-mocks.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    movies: films,
    selectedGenre: ALL_GENRES,
    moviesByGenre: films,
    showedMovies: films,
    moviesCount: SHOWN_MOVIES_NUMBER,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: ``
  }
});

it(`Main should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Main
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              user=""
              film={filmDetails}
              onMouseClick={() => {}}
              onMovieHover={() => {}}
              onItemEnter={() => { }}
              onItemLeave={() => { }}
              activeItem={null}/>
          </BrowserRouter>
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
