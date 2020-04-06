import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayerFull from './video-player-full.jsx';
import {filmDetails} from '../../mocks/test-mocks.js';

it(`VideoPlayerFull should render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayerFull
          film={filmDetails}
          onItemLeave={() => {}}/>,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
