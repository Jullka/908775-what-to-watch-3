import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMore} from './show-more.jsx';
import {films} from '../../mocks/test-mocks.js';

it(`ShowMore should render correctly`, () => {
  const tree = renderer
  .create(
      <ShowMore
        moviesByGenre={films}
        moviesCount={1}
        onShowMoreButtonClick={() => {}}/>
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
