import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movieCard = {
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
};

const moviesList = [
  `The Green Mile`,
  `Deliverance`,
  `Mirrors`,
  `Detective`,
  `John Wick: Chapter Two`,
  `Crank: High Voltage`,
  `The Bank Job`
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      title={movieCard.title}
      genre={movieCard.genre}
      releaseDate={movieCard.releaseDate}
      moviesList={moviesList}
      onSmallMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
