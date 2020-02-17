import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

const movie =
  {
    id: `001`,
    title: `Shutter Island`,
    img: `img/shutter-island.jpg`
  };

it(`SmallMovieCard component renders correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      key={movie.id}
      title={movie.title}
      img={movie.img}
      onMovieHover={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
