import React from 'react';
import PropTypes from 'prop-types';
import withVideo from '../hocs/with-video/with-video.js';

const VideoPlayer = (props) => (
  <div className="small-movie-card__image">
    <video width="100%" ref={props.videoRef} />
  </div>

);

VideoPlayer.propTypes = {
  videoRef: PropTypes.shape({current: PropTypes.instanceOf(HTMLMediaElement)}).isRequired
};

export default withVideo(VideoPlayer);
