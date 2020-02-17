import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  id: `011`,
  title: `War of the Worlds`,
  img: `img/war-of-the-worlds.jpg`
};

it(`Should movie card active on mouse hover`, () => {
  const onMovieOver = jest.fn();
  const main = shallow(
      <SmallMovieCard
        key={movie.id}
        title={movie.title}
        img={movie.img}

        onMovieHover={onMovieOver}
      />
  );

  const movieCard = main.find(`.small-movie-card`);

  movieCard.props().onMouseOver();
});
