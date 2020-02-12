import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card title be click`, () => {
  const onSmallMovieCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={movieCard.title}
        genre={movieCard.genre}
        releaseDate={movieCard.releaseDate}
        moviesList={moviesList}
        onSmallMovieCardTitleClick={onSmallMovieCardTitleClick}
      />
  );

  const movieCardTitle = main.find(`.small-movie-card__title`);
  const titleCount = movieCardTitle.length;

  movieCardTitle.forEach((title) => {
    title.props().onClick();
  });

  expect(onSmallMovieCardTitleClick.mock.calls.length).toBe(titleCount);
});
