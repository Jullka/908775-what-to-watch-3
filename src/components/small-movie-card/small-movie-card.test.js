import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import SmallMovieCard from './small-movie-card.jsx';
import {filmDetails} from '../../mocks/test-mocks.js';

it(`SmallMovieCard component renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SmallMovieCard
            film={filmDetails}
            key={filmDetails.id}
            onMovieCardClick={() => {}}
            onMovieHover={() => {}}
            onMovieLeave={() => {}}
          />
        </BrowserRouter>, {
          createNodeMock: () => ({})
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
