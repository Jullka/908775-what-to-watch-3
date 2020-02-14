import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const promoFilm = {
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991
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

it(`Main component renders correctly`, () => {
  const tree = renderer
  .create(<Main
    promoFilm={promoFilm}
    movies={movies}
    filmNameClickHandler={() => {}}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
