import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter()
});

const Movie = {
  id: `1`,
  title: `The Grand Budapest Hotel`,
  poster: `img/johnny-english.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`Movie title or poster click passes movie object to callback`, () => {
  const onMovieOver = jest.fn();
  const smallMovieCard = shallow(
      <SmallMovieCard
        id={Movie.id}
        title={Movie.title}
        img={Movie.poster}
        video={Movie.video}
        onMovieHover={onMovieOver} />
  );

  const moviePoster = smallMovieCard.find(`.small-movie-card`);
  moviePoster.simulate(`mouseOver`, onMovieOver({target: false}));

  expect(onMovieOver.mock.calls.length).toBe(1);
});

