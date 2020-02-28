import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movieDetails = {
  id: `044`,
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
  poster: `img/johnny-english.jpg`,
  bigPoster: `img/moonrise-kingdom.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: 240,
  text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
  director: `Steven Zaillian`,
  starring: `John Travolta, Robert Duvall, Stephen Fry and other`
};

const Movies = [
  {
    id: `014`,
    title: `Aviator`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `015`,
    title: `We need to talk about Kevin`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `016`,
    title: `What We Do in the Shadows`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `017`,
    title: `Revenant`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `018`,
    title: `Johnny English`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `019`,
    title: `Shutter Island`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `020`,
    title: `Pulp Fiction`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `021`,
    title: `No Country for Old Men`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `022`,
    title: `Snatch`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `023`,
    title: `Moonrise Kingdom`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `024`,
    title: `Seven Years in Tibet`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `025`,
    title: `Midnight Special`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `026`,
    title: `War of the Worlds`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `027`,
    title: `Dardjeeling Limited`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `028`,
    title: `Orlando`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `29`,
    title: `Mindhunter`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
  {
    id: `030`,
    title: `Midnight Special`,
    genre: `Thrillers`,
    releaseDate: 1991,
    poster: `img/johnny-english.jpg`,
    bigPoster: `img/moonrise-kingdom.jpg`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: 240,
    text: `Based on a true story about a small-time, self-possessed personal-injury attorney whose greed entangles him in a case that threatens to destroy him. The Woburn Case- which appears straightforward- instead evolves into a labyrinthine lawsuit of epic proportions where truth, if it can be found at all, resides not in the courtroom, but buried deep in a network of deceit and corruptions.`,
    director: `Steven Zaillian`,
    starring: `John Travolta, Robert Duvall, Stephen Fry and other`
  },
];

const handleMovieClick = () => {};

it(`Main component renders correctly`, () => {
  const tree = renderer
  .create(<Main
    movieDetails={movieDetails}
    movies={Movies}
    onMovieClick={handleMovieClick}
  />,
  {
    createNodeMock: () => ({})
  }
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
