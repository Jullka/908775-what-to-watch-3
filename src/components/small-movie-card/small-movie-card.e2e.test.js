import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  title: `War of the Worlds`,
  img: `img/war-of-the-worlds.jpg`
};

describe(`Should SmallMovieCard work correctly`, () => {
  const handleCardOver = jest.fn();

  const smallMovieComponent = shallow(
      <SmallMovieCard movie={movie} handleCardOver={handleCardOver}/>
  );

  const smallMovieCard = smallMovieComponent.find(`.small-movie-card`);

  it(`Should hover correctly`, () => {
    smallMovieCard.simulate(`mouseover`);

    expect(handleCardOver).toHaveBeenCalledWith(movie);
  });
});
