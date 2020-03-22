import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer/reducer.js';
import MoviePage from './movie-page.jsx';

const movieDetails = {
  id: `022`,
  title: `Avengers: Infinity War`,
  genre: `Comedy`,
  releaseDate: 1999,
  poster: `img/we-need-to-talk-about-kevin.jpg`,
  bigPoster: `img/we-need-to-talk-about-kevin.jpg`,
  ratingScore: 7.4,
  ratingLevel: `Very good`,
  ratingCount: 311,
  runTime: 144,
  text: `Having acquired the Power Stone, one of the six Infinity Stones, from the planet Xandar, Thanos and his lieutenants—Ebony Maw, Cull Obsidian, Proxima Midnight, and Corvus Glaive—intercept the spaceship carrying the survivors of Asgard's recent destruction.[N 1] As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Loki. `,
  director: `Anthony Russo, Joe Russo`,
  starring: [`Robert Downey Jr.`, `Chris Hemsworth`, `Mark Ruffalo`, `Chris Evans`, `Scarlett Johansson`],
  reviews: [
    {
      id: `1`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: new Date(),
      rating: 9.0
    },
    {
      id: `2`,
      text: `Ut ornare lectus sit amet. Molestie at elementum eu facilisis sed odio morbi quis. Sit amet dictum sit amet justo donec. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.`,
      author: `Bill Goodykoontz`,
      date: new Date(),
      rating: 8.0
    },
    {
      id: `3`,
      text: `Pulvinar elementum integer enim neque volutpat ac tincidunt. Parturient montes nascetur ridiculus mus mauris vitae.`,
      author: `Amanda Greever`,
      date: new Date(),
      rating: 6.7
    },
  ]
};

const store = createStore(reducer);

it(`MoviePage renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            movie={movieDetails}
          />
        </Provider>,
        {
          createNodeMock: () => ({})
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
