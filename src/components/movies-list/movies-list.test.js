import React from 'react';
import renderer from 'react-test-renderer';
import {reducer} from '../../reducer/reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';

const Movies = [
  {
    id: `001`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `002`,
    title: `Bohemian Rhapsody`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `003`,
    title: `Macbeth`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `004`,
    title: `Aviator`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `005`,
    title: `We need to talk about Kevin`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `006`,
    title: `What We Do in the Shadows`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `007`,
    title: `Revenant`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `008`,
    title: `Johnny English`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  }
];

const handleMovieClick = () => {};

const store = createStore(reducer);

it(`MoviesList should render correctly`, () => {
  const tree = renderer
   .create(
       <Provider store={store}>
         <MoviesList
           movies={Movies}
           onMovieClick={handleMovieClick}
         />
       </Provider>,
       {
         createNodeMock: () => ({})
       }
   )
   .toJSON();

  expect(tree).toMatchSnapshot();
});
