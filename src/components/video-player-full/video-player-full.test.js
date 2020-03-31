import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayerFull from './video-player-full.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../..//reducer/name-space.js';
import {AppState} from '../const.js';

const ALL_GENRES = `All genres`;
const SHOWN_MOVIES_NUMBER = 8;

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
};

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    movieDetails,
    movies: []
  },
  [NameSpace.APP]: {
    appState: AppState.READY,
    selectedGenre: ALL_GENRES,
    selectedMovie: null,
    shownMoviesNumber: SHOWN_MOVIES_NUMBER
  }
});

it(`VideoPlayerFull should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <VideoPlayerFull isPlaying={true}/>
        </Provider>,
        {
          createNodeMock: () => ({play: () => {}})
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
