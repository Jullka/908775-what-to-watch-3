import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import PropTypes from 'prop-types';
import {promoFilm} from '../../mocks/test-mocks.js';

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer
   .create(<VideoPlayer
     key={promoFilm.id}
     isPlaying={false}
     poster={promoFilm.img}
     src={promoFilm.video}
   >
     children=testIntance.children
   </VideoPlayer>, {
     createNodeMock: () => {
       return {};
     }
   }).toJSON();

  expect(tree).toMatchSnapshot();
});

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
