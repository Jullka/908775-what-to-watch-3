import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import GenresList from './genres-list.jsx';
import NameSpace from '../../reducer/name-space.js';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import {films} from '../../mocks/test-mocks.js';

const ALL_GENRES = `All genres`;

const GenresListWrapperd = withActiveItem(GenresList);

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    selectedGenre: ALL_GENRES,
    movies: films,
  }
});

it(`GenresList should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresListWrapperd />
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
