import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      title={movieCard.title}
      genre={movieCard.genre}
      releaseDate={movieCard.releaseDate}
      moviesList={moviesList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
