import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';
import withVideo from '../hocs/with-video/with-video.jsx';

const VideoPlayerWrapped = withVideo(VideoPlayer);

const SmallMovieCard = (props) => {
  const {title, image, video} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayerWrapped
        isPlaying={false}
        poster={image}
        src={video}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
};

export default SmallMovieCard;
