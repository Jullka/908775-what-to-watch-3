import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
  poster: `img/johnny-english.jpg`,
  bigPoster: `img/moonrise-kingdom.jpg`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: `John Travolta, Robert Duvall, Stephen Fry and other`
};

const mockEvent = {
  preventDefault() {},
};

it(`Should movie card active on mouse hover`, () => {
  const handleHover = jest.fn();
  const handleMovieClick = () => {};

  const smallMovieCard = shallow(
      <SmallMovieCard
        movie={movie}
        onMovieHover={handleHover}
        onClick={handleMovieClick}
      />
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.simulate(`mouseover`, mockEvent);
  expect(handleHover).toHaveBeenCalledTimes(1);
  expect(handleHover.mock.calls[0][0]).toMatchObject(movie);
});

it(`Movie title or poster click passes movie object to callback`, () => {
  const handleHover = () => {};
  const handleMovieClick = jest.fn();
  const screen = shallow(
      <SmallMovieCard
        movie={movie}
        onMovieHover={handleHover}
        onClick={handleMovieClick} />
  );

  const moviePoster = screen.find(`.small-movie-card`);
  moviePoster.simulate(`click`, mockEvent);

  expect(handleMovieClick).toHaveBeenCalledTimes(1);
  expect(handleMovieClick.mock.calls[0][0]).toMatchObject(movie);
});

