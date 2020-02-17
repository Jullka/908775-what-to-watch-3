import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const promoMovie = {
  title: `Terminator 2: Judgment Day`,
  genre: `Thrillers`,
  releaseDate: 1991,
};

const Movies = [
  {
    id: `011`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: `012`,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
  },
  {
    id: `013`,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
  },
  {
    id: `014`,
    title: `Aviator`,
    img: `img/aviator.jpg`,
  },
  {
    id: `015`,
    title: `We need to talk about Kevin`,
    img: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    id: `016`,
    title: `What We Do in the Shadows`,
    img: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    id: `017`,
    title: `Revenant`,
    img: `img/revenant.jpg`,
  },
  {
    id: `018`,
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
  },
  {
    id: `019`,
    title: `Shutter Island`,
    img: `img/shutter-island.jpg`,
  },
  {
    id: `020`,
    title: `Pulp Fiction`,
    img: `img/pulp-fiction.jpg`,
  },
  {
    id: `021`,
    title: `No Country for Old Men`,
    img: `img/no-country-for-old-men.jpg`,
  },
  {
    id: `022`,
    title: `Snatch`,
    img: `img/snatch.jpg`,
  },
  {
    id: `023`,
    title: `Moonrise Kingdom`,
    img: `img/moonrise-kingdom.jpg`,
  },
  {
    id: `024`,
    title: `Seven Years in Tibet`,
    img: `img/seven-years-in-tibet.jpg`,
  },
  {
    id: `025`,
    title: `Midnight Special`,
    img: `img/midnight-special.jpg`,
  },
  {
    id: `026`,
    title: `War of the Worlds`,
    img: `img/war-of-the-worlds.jpg`,
  },
  {
    id: `027`,
    title: `Dardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`,
  },
  {
    id: `028`,
    title: `Orlando`,
    img: `img/orlando.jpg`,
  },
  {
    id: `29`,
    title: `Mindhunter`,
    img: `img/mindhunter.jpg`,
  },
  {
    id: `030`,
    title: `Midnight Special`,
    img: `img/midnight-special.jpg`,
  },
];

it(`Should movie card title be clicked`, () => {
  const onMovieTitleClick = jest.fn();
  const onMovieMouseHover = jest.fn();

  const main = shallow(
      <Main
        title={promoMovie.title}
        genre={promoMovie.genre}
        releaseDate={promoMovie.releaseDate}
        movies={Movies}
        onMouseClick={onMovieTitleClick}
        onMovieHover={onMovieMouseHover}
      />
  );

  const movieTitle = main.find(`.movie-card__title`);

  movieTitle.props().onClick();
});
