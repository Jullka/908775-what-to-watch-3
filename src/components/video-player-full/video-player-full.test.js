import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayerFull from './video-player-full.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer/reducer.js';

const store = createStore(reducer);

it(`VideoPlayerFull should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <VideoPlayerFull isPlaying={true}/>
        </Provider>,
        {
          createNodeMock: () => ({play: () => {}})
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
