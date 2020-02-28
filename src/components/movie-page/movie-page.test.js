import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movieDetails = {
  id: `022`,
  title: `Avengers: Infinity War`,
  genre: `Comedy`,
  releaseDate: 1999,
  poster: `img/we-need-to-talk-about-kevin.jpg`,
  bigPoster: `img/we-need-to-talk-about-kevin.jpg`,
  ratingScore: `7,4`,
  ratingLevel: `Very good`,
  ratingCount: 311,
  text: `Having acquired the Power Stone, one of the six Infinity Stones, from the planet Xandar, Thanos and his lieutenants—Ebony Maw, Cull Obsidian, Proxima Midnight, and Corvus Glaive—intercept the spaceship carrying the survivors of Asgard's recent destruction.[N 1] As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Loki. `,
  director: `Anthony Russo, Joe Russo`,
  starring: `Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson`
};

it(`MoviePagecomponent renders correctly`, () => {
  const tree = renderer
    .create(<MoviePage
      movie={movieDetails}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});