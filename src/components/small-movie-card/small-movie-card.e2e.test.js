import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {reducer, ActionCreator} from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
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
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: `John Travolta, Robert Duvall, Stephen Fry and other`
};

const mockEvent = {
  preventDefault() {},
};

const store = createStore(reducer);

it(`Movie title or poster click passes movie object to callback`, () => {
  ActionCreator.selectMovie = jest.fn(ActionCreator.selectMovie);
  const smallMovieCard = mount(
      <Provider store={store}>
        <SmallMovieCard
          movie={movie}/>
      </Provider>
  );

  const moviePoster = smallMovieCard.find(`.small-movie-card`);
  moviePoster.simulate(`click`, mockEvent);

  expect(ActionCreator.selectMovie).toHaveBeenCalledTimes(1);
  expect(ActionCreator.selectMovie.mock.calls[0][0]).toMatchObject(movie);
});

