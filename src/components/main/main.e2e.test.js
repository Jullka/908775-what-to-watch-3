import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {reducer, ActionCreator} from '../../reducer/reducer.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import Main from "./main.jsx";

const MOVIES_IN_STORE_COUNT = 8;

Enzyme.configure({
  adapter: new Adapter(),
});

const movieDetails = {
  id: `044`,
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
  poster: `img/johnny-english.jpg`,
  bigPoster: `img/moonrise-kingdom.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: 8.9,
  ratingLevel: `Very good`,
  ratingCount: 240,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: `John Travolta, Robert Duvall, Stephen Fry and other`
};

const mockEvent = {
  preventDefault() {},
};

const store = createStore(reducer);

it(`Should movieCard be clicked`, () => {
  ActionCreator.selectMovie = jest.fn(ActionCreator.selectMovie);

  const main = mount(
      <Provider store={store}>
        <Main
          movieDetails={movieDetails}
        />
      </Provider>
  );

  const movieTitle = main.find(`.small-movie-card__link`);
  movieTitle.forEach((title) => title.simulate(`click`, mockEvent));
  expect(ActionCreator.selectMovie.mock.calls.length).toBe(MOVIES_IN_STORE_COUNT);
});

