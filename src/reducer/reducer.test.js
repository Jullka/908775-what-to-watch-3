import {reducer, ActionCreator} from './reducer.js';

const ALL_GENRES = `All genres`;

const Movies = [
  {
    id: `1`,
    title: `Black Panther`,
    genre: `Kids & Family`,
    releaseDate: 2018,
    runTime: 136,
    poster: `img/moonrise-kingdom.jpg`,
    bigPoster: `img/seven-years-in-tibet.jpg`,
    ratingCount: 611,
    ratingScore: 8.4,
    ratingLevel: `Very good`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Ryan Coogler`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`, `Amanda Greever`, `Aidan Gillen`, `Allen Leech`, `Tom Hollander`, `Mike Myers`],
    reviews: []
  },
  {
    id: `2`,
    title: `Spider-Man: Far From Home`,
    genre: `Thriller`,
    releaseDate: 2019,
    runTime: 114,
    poster: `img/seven-years-in-tibet.jpg`,
    bigPoster: `img/seven-years-in-tibet.jpg`,
    ratingCount: 788,
    ratingScore: 9.8,
    ratingLevel: `Very good`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Jon Watts`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`, `Amanda Greever`, `Aidan Gillen`, `Allen Leech`, `Tom Hollander`, `Mike Myers`],
    reviews: []
  },
  {
    id: `3`,
    title: `Dardjeeling Limited`,
    genre: `Documentary`,
    releaseDate: 2014,
    runTime: 129,
    poster: `img/dardjeeling-limited.jpg`,
    bigPoster: `img/seven-years-in-tibet.jpg`,
    ratingCount: 534,
    ratingScore: 9.1,
    ratingLevel: `Very good`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: [`John Travolta`, `Robert Duvall`, `Stephen Fry`, `Amanda Greever`, `Aidan Gillen`, `Allen Leech`, `Tom Hollander`, `Mike Myers`],
    reviews: []
  }
];

it(`Reducer should change genre`, () => {
  const initialState = {
    selectedGenre: ALL_GENRES,
    movies: Movies,
    selectedMovie: null,
    history: []
  };
  const targetState = {
    selectedGenre: `Comedy`,
    movies: Movies,
    selectedMovie: null,
    history: [ActionCreator.changeGenre(`Comedy`)]
  };

  expect(reducer(initialState, ActionCreator.changeGenre(`Comedy`)))
    .toEqual(targetState);
});

it(`Reducer should select movie`, () => {
  const initialState = {
    selectedGenre: ALL_GENRES,
    movies: Movies,
    selectedMovie: null,
    history: []
  };
  const targetState = {
    selectedGenre: ALL_GENRES,
    movies: Movies,
    selectedMovie: Movies[0],
    history: [ActionCreator.selectMovie(Movies[0])]
  };

  expect(reducer(initialState, ActionCreator.selectMovie(Movies[0])))
    .toEqual(targetState);
});
