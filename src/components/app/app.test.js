import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const promoFilm = {
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
};

const movies = [
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
      promoFilm={promoFilm}
      movies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

