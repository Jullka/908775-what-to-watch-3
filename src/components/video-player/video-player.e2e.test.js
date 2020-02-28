import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = {
  poster: `img/moonrise-kingdom.jpg`,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`VideoPlayer should have two states: Playing, Paused`, () => {
  const wrapperPlaying = mount(
      <VideoPlayer
        video={movie.video}
        poster={movie.poster}
        isPlaying={true} />
  );
  expect(wrapperPlaying.state().isPlaying).toBe(true);

  const wrapperPaused = mount(
      <VideoPlayer
        video={movie.video}
        poster={movie.poster}
        isPlaying={false} />
  );
  expect(wrapperPaused.state().isPlaying).toBe(false);
});
