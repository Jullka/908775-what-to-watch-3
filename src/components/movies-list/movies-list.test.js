import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';
import NameSpace from '../../reducer/name-space.js';
import {films} from '../../mocks/test-mocks.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

const mockStore = configureStore([]);

const MoviesListWrapped = withActiveItem(MoviesList);

it(`MoviesList should render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      selectedGenre: ALL_GENRES,
      films,
      moviesByGenre: films,
      showedMovies: films,
      moviesCount: SHOWN_MOVIES_NUMBER,
    }
  });

  const tree = renderer
   .create(
       <Provider store={store}>
         <MoviesListWrapped
           onMovieHover={() => {}}/>
       </Provider>, {
         createNodeMock: () => ({})
       }
   )
   .toJSON();

  expect(tree).toMatchSnapshot();
});
