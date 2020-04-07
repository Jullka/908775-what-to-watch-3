import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';
import {filmDetails} from '../../mocks/test-mocks.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Movie title or poster click passes movie object to callback`, () => {
  const onMovieOver = jest.fn();
  const smallMovieCard = shallow(
      <SmallMovieCard
        film={filmDetails}
        key={filmDetails.id}
        onMovieCardClick={() => {}}
        onMovieHover={() => {}}
        onMovieLeave={() => {}}/>
  );

  const moviePoster = smallMovieCard.find(`.small-movie-card`);
  moviePoster.simulate(`mouseOver`, onMovieOver({target: false}));

  expect(onMovieOver.mock.calls.length).toBe(1);
});

