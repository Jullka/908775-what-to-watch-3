import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";

const movies = [
  {
    title: `We need to talk about Kevin`,
    img: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `What We Do in the Shadows`,
    img: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Johnny English`,
    img: `img/johnny-english.jpg`
  },
  {
    title: `Pulp Fiction`,
    img: `img/pulp-fiction.jpg`
  },
  {
    title: `Snatch`,
    img: `img/snatch.jpg`
  },
];

it(`MoviesList component renders correctly`, () => {
  const tree = renderer
    .create(<MoviesList movies={movies} handleTitleClick={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
