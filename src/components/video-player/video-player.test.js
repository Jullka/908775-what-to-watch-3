import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const Movie = {
  poster: `img/bohemian-rhapsody.jpg`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer
   .create(<VideoPlayer
     isPlaying={false}
     poster={Movie.poster}
     video={Movie.video}
   />, {
     createNodeMock: () => ({play: () => {}})
   }).toJSON();

  expect(tree).toMatchSnapshot();
});
