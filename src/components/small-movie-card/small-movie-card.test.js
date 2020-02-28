import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

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

const handleMovieClick = () => {};
const handleHover = () => {};

it(`SmallMovieCard component renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      movie={movie}
      onMovieHover={handleHover}
      onClick={handleMovieClick}/>,
    {
      createNodeMock: () => ({})
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});