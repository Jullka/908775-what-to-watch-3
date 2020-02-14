import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const movie =
  {
    title: `Shutter Island`,
    img: `img/shutter-island.jpg`
  };

it(`SmallMovieCard component renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard movie={movie} handleCardOver={() => {}} handleTitleClick={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
