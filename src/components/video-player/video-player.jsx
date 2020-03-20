import React from 'react';
import PropTypes from 'prop-types';
import withVideo from '../hocs/with-video/with-video.js';

const VideoPlayer = (props) => (
  <div className="small-movie-card__image">
    {props.children}
  </div>

);

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};

export default withVideo(VideoPlayer);
